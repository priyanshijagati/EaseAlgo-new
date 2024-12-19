const ghpages = require('gh-pages');

ghpages.publish('build', function(err) {
  if (err) {
    console.error('Deployment error:', err);
  } else {
    console.log('Deployment successful!');
  }
});
