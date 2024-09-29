module.exports = {
      images: {
        remotePatterns: [
          {
            protocol: 'https', // Specify the protocol (optional, defaults to https)
            hostname: 'cdn.dribbble.com', // Allow images from this domain
            pathname: '**', // Allow any path within the domain (optional)
          },
        ],
      },
    };