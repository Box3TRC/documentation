// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import tabBlocks from "docusaurus-remark-plugin-tab-blocks";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Box3TRC',
  tagline: '🔬 Box3TRC 「Technical Research Center」🔬 欢迎来到岛研所！',
  favicon: '/img/trclogo.png',

  // Set the production url of your site here
  url: 'https://trc.tobylai.fun',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Box3TRC', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [[tabBlocks, {}]],
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Box3TRC/documentation/blob/main',
        },
        blog: {
          remarkPlugins: [tabBlocks],
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Box3TRC/documentation/blob/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/trclogo.png',
      navbar: {
        title: 'Box3TRC',
        logo: {
          alt: '[logo]',
          src: '/img/trclogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/Box3TRC/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '介绍',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '论坛 (Github Discussions)',
                href: 'https://github.com/orgs/Box3TRC/discussions/',
              },
              // {
              //   label: 'QQ群',
              //   href: 'https://qm.qq.com/q/Uzgx47iWWK',
              // },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Box3TRC',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Box3TRC。使用Docusaurus构建。`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en", "zh"],
        explicitSearchResultPath: true,
      }),
    ],
  ], plugins: [
    // [
    //   'vercel-analytics',
    //   {
    //     debug: true,
    //     mode: 'auto',
    //   },
    // ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     id: 'typedoc-areact',
    //     entryPoints: ['dts/areact/index.d.ts'],
    //     skipErrorChecking: true,
    //     name: "模块: areact",
    //     out: "/docs/areact/api/index", 
    //     sidebar: {
    //       "autoConfiguration": false,
    //       "pretty": false
    //     }
    //   },
    // ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     id: 'typedoc-areact-components',
    //     entryPoints: ['dts/areact/components.d.ts'],
    //     skipErrorChecking: true,
    //     name: "模块: areact/components",
    //     out: "/docs/areact/api/components"
    //   },
    // ],
    [
      '@docusaurus/plugin-pwa',
      {
        // debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/trclogo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#7345c4',
          },
        ],
      },
    ],
  ]
};

export default config;
