const path = require('path')

module.exports = {
  siteMetadata: {
    title: "Glitch Kibbitz",
    description: "Glitch Kibbitz is a Seattle band creating klezmer renditions of video game tunes.",
    twitter: '@GlitchKibbitz',
    siteUrl: 'https://glitchkibbitz.com',
    image: '/images/icon.png'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-G2700KJ808`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Glitch Kibbitz`,
        short_name: `Glitch Kibbitz`,
        start_url: `/`,
        icon: `src/assets/images/icon.png`,
      },
    },
  ],
};
