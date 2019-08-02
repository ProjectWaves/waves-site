module.exports = {
  siteMetadata: {
    title: `Project Waves`,
    description: `Waves is a community ISP focused on providing high quality, high-availability, transparent internet to the Baltimore community in a scalable, cost-effective manner.`,
    author: `@wavesmesh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utilities/typography`
      }
    }
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Project Waves`,
        short_name: `Waves`,
        start_url: `/`,
        background_color: `#102A43`,
        theme_color: `#7BA7FF`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
