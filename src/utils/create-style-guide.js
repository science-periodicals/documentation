import uuid from 'uuid';
import { arrayify } from '@scipe/jsonld';
import { DS3_PARTS } from '../constants';

// TODO evolve so that it consumes @scipe/librarian#createStyleGuide and just map the styleGuide to DS3
export default function createStyleGuide(opts = {}) {
  const id = opts['@id'] || opts.id || `_:${uuid.v4()}`;

  const styleGuide = {
    '@id': id,
    '@type': 'ScholarlyStyleGuide'
  };

  if (opts.parts || opts.addDefaultParts) {
    styleGuide.hasPart = arrayify(opts.parts) || DS3_PARTS;
  }
  return styleGuide;
}
