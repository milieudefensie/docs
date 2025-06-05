import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Campaign website',
  description: 'Open source campaign website for activists',
  ignoreDeadLinks: true,
  cleanUrls: true,
  srcDir: './docs',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    footer: {
      // message: 'Released under the MIT License.',
      copyright:
        'All content on this website is available under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence',
    },
    nav: [
      { text: 'Strategy', link: '/strategy/' },
      {
        text: 'Storybook',
        link: 'https://milieudefensie-storybook.pages.dev/',
      },
      {
        text: 'Milieudefensie website',
        link: 'https://milieudefensie.nl/',
      },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [{ text: 'Introduction', link: '/introduction' }],
      },
      {
        text: 'Strategy',
        items: [
          { text: 'Website strategy', link: '/strategy' },
          { text: 'Design principles', link: '/strategy/design-principles' },

          {
            text: 'Journeys',
            collapsed: true,
            items: [
              { text: 'Volunteers', link: '/strategy/journeys/volunteers' },
            ],
          },
          {
            text: 'Pages',
            collapsed: true,
            items: [
              { text: '🏡 Home', link: '/strategy/pages/home' },
              {
                text: '👉 Start contributing',
                link: '/strategy/pages/contribute',
              },
              { text: '❤️ Become member', link: '/strategy/pages/member' },
              { text: '💬 Signal', link: '/strategy/pages/signal' },
              {
                text: '📱 Online campaigns',
                link: '/strategy/pages/campaigns',
              },
              { text: '💰 Donate', link: '/strategy/pages/donate' },
              { text: '📆 Events', link: '/strategy/pages/events' },
              { text: '📍 Local groups', link: '/strategy/pages/local-groups' },
              {
                text: '📖 Training & support',
                link: '/strategy/pages/training-support',
              },
              { text: '💬 Live AI chat', link: '/strategy/pages/chat' },
              { text: '☎️ Contacts', link: '/strategy/pages/contacts' },
              { text: '🗺️ Dashboard', link: '/strategy/pages/dashboard' },
            ],
          },
        ],
      },
      {
        text: 'Developers',
        items: [
          { text: '✅ Features', link: '/developers/features' },
          { text: '🛠️ Tech stack', link: '/developers/tech-stack' },
          {
            text: '🧱 Reusable components',
            link: '/developers/components',
          },
          {
            text: '👩‍💻 GitHub repro',
            link: 'https://github.com/milieudefensie/website',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/milieudefensie/website' },
    ],

    editLink: {
      pattern: 'https://github.com/milieudefensie/docs/edit/main/docs/:path',
    },
  },
})
