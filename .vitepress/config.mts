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

          {
            text: 'Pages',
            items: [
              { text: '🏡 Home', link: '/strategy/home' },
              { text: '👉 Start contributing', link: '/strategy/contribute' },
              { text: '❤️ Become member', link: '/strategy/member' },
              { text: '💬 Signal / WhatsApp', link: '/strategy/signal' },
              { text: '📱 Online campaigns', link: '/strategy/campaigns' },
              { text: '💰 Donate', link: '/strategy/donate' },
              { text: '📆 Events', link: '/strategy/events' },
              { text: '📍 Local groups', link: '/strategy/local-groups' },
              {
                text: '📖 Training & support',
                link: '/strategy/training-support',
              },
              { text: '🗺️ Dashboard', link: '/strategy/dashboard' },
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
            text: '👀 Storybook',
            link: 'https://milieudefensie-storybook.pages.dev/',
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
      pattern: 'https://github.com/milieudefensie/website/edit/main/docs/:path',
    },
  },
})
