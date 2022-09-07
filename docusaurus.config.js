// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LIKO-12",
  tagline: "An open-source fantasy computer",
  url: "https://liko-12.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Rami Sabbagh", // Usually your GitHub org/user name.
  projectName: "LIKO-12", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/LIKO-12/LIKO-12.github.io/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo. // TODO: Remove the blog.
          editUrl:
            "https://github.com/LIKO-12/LIKO-12.github.io/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      navbar: {
        title: "LIKO-12",
        logo: {
          alt: "LIKO-12 Icon",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Reference",
          },
          { to: "/blog", label: "Blog", position: "left" }, // TODO: Remove the blog.
          {
            href: "https://github.com/LIKO-12/LIKO-12",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction", // TODO: Tweak this.
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/adjqkd639F",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/rami_sab07",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Privacy Policy",
                to: "/privacy-policy",
              },
              {
                label: "Blog", // TODO: Remove the blog.
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/LIKO-12/LIKO-12",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}-2016 Rami Sabbagh`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua"],
      },
    }),
};

module.exports = config;
