//import keystone
var keystone = require('keystone');

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'Gia Phả Phạm Phú',
  // Paths to our application static files
  'static': [
      './server/public/js/',
      './server/public/img/',
  ],
  // Keystone includes an updates framework,
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database,
  // transition data when your models change,
  // or run transformation scripts against your database.
  'auto update': true,
  'cloudinary config': 'cloudinary://915351483667299:9im4e4B0Xd0060utUk82TN41s14@giaphatocphamphu',
  // The url for your MongoDB connection
  'mongo': 'mongodb://NeoTheSecond1404:123456zz@ds133291.mlab.com:33291/giaphaphamphu',
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User',
  // The encryption key to use for your cookies.
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});

// Load your project's Models
keystone.import('./server/models');

// Add routes later
keystone.set('routes', require('./server/routes'));
// Start Keystone
keystone.start();
