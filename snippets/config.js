export const defaultConfig = {
  // Domain
  rootDomain: process.env.ROOT_DOMAIN || 'sci.pe',

  // ZMQ connect endpoints
  brokerXpubConnectEndpoint:
    process.env.BROKER_XPUB_CONNECT_ENDPOINT || 'tcp://127.0.0.1:3001',
  brokerXsubConnectEndpoint:
    process.env.BROKER_XSUB_CONNECT_ENDPOINT || 'tcp://127.0.0.1:3002',
  brokerFrontendConnectEndpoint:
    process.env.BROKER_FRONTEND_CONNECT_ENDPOINT || 'tcp://127.0.0.1:3003',
  brokerBackendConnectEndpoint:
    process.env.BROKER_BACKEND_CONNECT_ENDPOINT || 'tcp://127.0.0.1:3004',

  // ZMQ bind endpoints
  brokerXpubBindEndpoint:
    process.env.BROKER_XPUB_BIND_ENDPOINT || 'tcp://*:3001',
  brokerXsubBindEndpoint:
    process.env.BROKER_XSUB_BIND_ENDPOINT || 'tcp://*:3002',
  brokerFrontendBindEndpoint:
    process.env.BROKER_FRONTEND_BIND_ENDPOINT || 'tcp://*:3003',
  brokerBackendBindEndpoint:
    process.env.BROKER_BACKEND_BIND_ENDPOINT || 'tcp://*:3004',

  // CouchDB
  couchProtocol: process.env.COUCH_PROTOCOL || 'http:',
  couchHost: process.env.COUCH_HOST || '127.0.0.1',
  couchPort: process.env.COUCH_PORT || 5984,
  couchAdminUsername: process.env.COUCH_ADMIN_USERNAME || 'admin',
  couchAdminPassword: process.env.COUCH_ADMIN_PASSWORD || 'pass',
  dbName: process.env.DB_NAME || 'scipe',

  // Redis
  resisHost: process.env.REDIS_HOST || '127.0.0.1',
  redisPort: process.env.REDIS_PORT || 6379,
  redisPassword: process.env.REDIS_PASSWORD || 'pass',

  // Blob storage
  blobStorageBackend: process.env.BLOB_STORAGE_BACKEND || 'fs', // 'fs' or `S3`
  s3BlobStoreRoot: process.env.S3_BLOB_STORE_ROOT || 'blobs',
  fsBlobStoreRoot: process.env.FS_BLOB_STORE_ROOT || '/tmp/blobs',

  // Cache (when set to `true` API response payload are served from a Redis cache)
  cache: process.env.CACHE || false,

  // Email service
  emailService: process.env.EMAIL_SERVICE, // 'ses' or undefined

  // Logging (see Bunyan documentation https://github.com/trentm/node-bunyan)
  log: {
    name: 'app',
    level: 'info'
  },

  // Session (cookies)
  sessionSecret: process.env.SESSION_SECRET || 'secret',

  // Stripe (payment & invoice)
  stripeKey: process.env.STRIPE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSaWebhookSecret: process.env.STRIPE_SA_WEBHOOK_SECRET,
  stripeConnectWebhookSecret: process.env.STRIPE_CONNECT_WEBHOOK_SECRET,

  // Crossref (DOIs)
  crossrefDoiRegistrationUrl:
    process.env.CROSSREF_DOI_REGISTRATION_URL ||
    'https://test.crossref.org/servlet/deposit', // see https://support.crossref.org/hc/en-us/articles/214960123-Using-HTTPS-to-POST-Files
  crossrefDoiRegistrationUsername:
    process.env.CROSSREF_DOI_REGISTRATION_USERNAME || 'username',
  crossrefDoiRegistrationPassword:
    process.env.CROSSREF_DOI_REGISTRATION_PASSWORD || 'password',

  // Registration
  openRegistration: false
};
