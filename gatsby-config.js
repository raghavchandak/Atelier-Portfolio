/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homeimage`,
        path: `${__dirname}/src/images/home/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k2c0zsde2up2`,
        accessToken: `2zIDsArEDWMIxSpSzc_lgkHOPBKf7Jpv3Tq5MrtMa20`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Atelier Portfolio`,
        short_name: `Atelier`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/images/Logo.png'
      },
    },
  ],
  siteMetadata: {
    title: "Atelier",
    owner: "Pooja Chandak",
  },
}
