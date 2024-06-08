// next.config.js

module.exports = {
    images: {
      domains: ['awahids.my.id'], // Deprecated, but you can still keep it for other purposes
      // Replace domains with remotePatterns
      remotePatterns: [
        {
          // Specify the domain without protocol and wildcard
          hostname: 'awahids.my.id',
        }
      ],
    },
  };
  