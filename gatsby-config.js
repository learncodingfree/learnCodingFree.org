module.exports = {
  siteMetadata: {
    title: "learncodingfree.org",
    author: "Tanay Pratap",
    description: "learn coding for free and get ready for industry"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'learnCodingFree',
        short_name: 'learnCodingFree',
        start_url: '/',
        background_color: '#1e2942',
        theme_color: '#1e2942',
        display: 'minimal-ui',
        icon: 'src/assets/images/coding.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-49394184-2`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
