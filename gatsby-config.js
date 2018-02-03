module.exports = {
  siteMetadata: {
    title: 'Morgan Stone | UI/UX Achitect, Product Designer, and Front end Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1337770-1`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
