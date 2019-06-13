module.exports = {
  siteMetadata: {
    title: `Waves Community Mesh`,
    description: `Waves is a community-driven project focused on providing high quality, high-availability, transparent internet to the Baltimore community in a scalable, cost-effective manner.`,
    author: `@jonathanprozzi`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Waves Community Mesh`,
        short_name: `Wavesmesh`,
        start_url: `/`,
        background_color: `#102A43`,
        theme_color: `#7BA7FF`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
  ],
};
