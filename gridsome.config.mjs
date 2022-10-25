// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteDescription: "Personal Blog",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: { typeName: "BlogPost", path: "./blog/**/*.md" }
    },
    { use: "gridsome-plugin-typescript" }
  ],
  templates: { BlogPost: "/blog/:title" }
};
