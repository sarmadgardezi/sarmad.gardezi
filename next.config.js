const moduleExports = {

  images: {
    domains: [
      'img.youtube.com',
      'dl.airtable.com',
      'hn.nikolovlazar.com',
      'opengraph.githubassets.com',
    ],
  },
  async redirects() {
    return [
      ...oldBlogPosts.map((post) => ({
        source: post,
        destination: `${OLD_BLOG_URL}${post}`,
        permanent: true,
      })),
      {
        source: '/zagjs-demo',
        destination:
          'https://codesandbox.io/s/react-slider-example-vn855h?file=/src/slider.tsx',
        permanent: true,
      },
    ];
  },
};