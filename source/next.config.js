const withSass = require('@zeit/next-sass')

// Environment configs
const {
  parsed: {
    APIGateway,
    FileBucketName: bucket,
    IdentityPoolId: identityPoolId,
    region,
    UserPoolClientId: userPoolWebClientId,
    UserPoolId: userPoolId,
  },
} = require('dotenv').config()

// Configs passed to next.js
module.exports = withSass({
  publicRuntimeConfig: {
    APIGateway,
    bucket,
    identityPoolId,
    region,
    userPoolWebClientId,
    userPoolId,
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]-[hash:base64:5]',
  },
})
