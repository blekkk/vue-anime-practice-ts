
module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Vue Typescript Practice'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-anime-practice-ts/'
    : '/'
};