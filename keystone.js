// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Next app
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// Require keystone
const keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
keystone.init({
   'name': 'nguyentrongtoc.com',
   'brand': 'Nguyễn Trọng Tộc',
   'auto update': true,
   'session': true,
   'auth': true,
   'user model': 'User',
   'wysiwyg cloudinary images': true,
   'wysiwyg override toolbar': false,
   'wysiwyg menubar': true,
   'cloudinary config': 'cloudinary://915351483667299:9im4e4B0Xd0060utUk82TN41s14@giaphatocphamphu',
   'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
   'mongo': "mongodb://NeoTheSecond1404:123456zz@ds129670.mlab.com:29670/nguyentrongtoc"
});

// Load your project's Models
keystone.import('models');

// Start Next app
app.prepare()
 .then(() => {

  // Load your project's Routes
  keystone.set('routes', require('./routes')(app));

  // Configure the navigation bar in Keystone's Admin UI
  keystone.set('nav', {
   users: 'users',
  });

  keystone.set('admin path' , "admin");

  // keystone.set('signin logo', 'http://3.15.157.6/common/images/header-brand-1.png');

  keystone.start();
 });
