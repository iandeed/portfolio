import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ian Deed | Technical Writer',
  tagline: 'Clear documentation for complex products and technical audiences.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://iandeed.github.io',
  baseUrl: '/portfolio/',
  organizationName: 'iandeed',
  projectName: 'portfolio',
  trailingSlash: false,
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ian Deed',
      logo: {
        alt: 'Ian Deed logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/cv', label: 'CV', position: 'left'},
        {to: '/showcase', label: 'Showcase', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/iandeed',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'CV', to: '/cv'},
            {label: 'Showcase', to: '/showcase'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Contact', to: '/contact'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/ian-deed/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ian Deed. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
