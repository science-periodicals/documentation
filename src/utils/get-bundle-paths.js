import fs from 'fs';
import path from 'path';
import { arrayify } from '@scipe/jsonld';

const manifestPath = path.resolve(
  __dirname,
  '../../public/assets/documentation-bundle-manifest.json'
);

let lastSeen = 0;
let cache = {};
let retries = 10;

export default function getBundlePaths(chunkNames, cb) {
  if (!cb) {
    cb = chunkNames;
    chunkNames = undefined;
  }

  fs.stat(manifestPath, (err, info) => {
    if (err) {
      if (err.code === 'ENOENT') {
        if (!retries) return cb(err);
        retries--;
        return setTimeout(() => getBundlePaths(chunkNames, cb), 5000);
      }
      return cb(err);
    }

    // !! info.mtime.getTime() can be 0 on AWS
    if (
      info.mtime.getTime() > lastSeen ||
      info.birthtime.getTime() > lastSeen
    ) {
      return fs.readFile(manifestPath, 'utf8', (err, data) => {
        if (err) return cb(err);
        try {
          lastSeen = info.mtime.getTime();
          cache = JSON.parse(data);
        } catch (err) {
          return cb(err);
        }
        cb(null, handlePrefetch(chunkNames, cache));
      });
    }
    cb(null, handlePrefetch(chunkNames, cache));
  });
}

function handlePrefetch(chunkNames, cache) {
  if (chunkNames) {
    Object.keys(cache).forEach(composedChunkName => {
      if (
        !arrayify(chunkNames).some(chunkName =>
          composedChunkName.includes(chunkName)
        )
      ) {
        cache[composedChunkName].prefetch = true;
      }
    });
  }
  return cache;
}
