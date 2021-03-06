// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CPTSD Support',
  tagline: 'Everything you need for understanding and recovering from CPTSD',
  url: 'https://cptsd.support',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bolsterdigital', // Usually your GitHub org/user name.
  projectName: 'cptsdrepo', // Usually your repo name.
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    'docusaurus-plugin-matomo',
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',

          // Please change this to your repo.
          editUrl:
            'https://github.com/bolsterdigital/cptsdrepo/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/bolsterdigital/cptsdrepo/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-image.png',
      matomo: {
        matomoUrl: 'https://stats.bureaubolster.nl/',
        siteId: '23',
        phpLoader: 'matomo.php',
        jsLoader: 'matomo.js',
      },
      navbar: {
        title: 'CPTSD Support',
        logo: {
          alt: 'CPTSD Support logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Start',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/bolsterdigital/cptsdrepo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start',
                to: '/',
              },
            ],
          },

          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bolsterdigital/cptsdrepo',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
