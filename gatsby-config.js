module.exports = {
  siteMetadata: {
    title: `Menuisier en Guadeloupe Saint-François - cuisine, meuble sur mesure, bureau, ameublement en Guadeloupe`,
    description: `Mesnil Jean-Bernard, menuisier, artisan menuisier, d'agencement et du bâtiment en Guadeloupe.`,
    author: `@mesniltheo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `Menuisier Guadeloupe - Mesnil Jean-Bernard`,
        short_name: `Menuisier Guadeloupe`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
