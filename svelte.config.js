import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : '/ant-portfolio'
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
