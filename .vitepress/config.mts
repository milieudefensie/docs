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
      { text: 'Storybook', link: '' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [{ text: 'Introduction', link: '/introduction' }],
      },
      {
        text: 'Strategy',
        items: [
          { text: '🎯 Website strategy', link: '/strategy/' },
          { text: '📝 Primary signup form', link: '/strategy/signup' },
          { text: '📆 Events', link: '/strategy/events' },
          { text: '📍 Local groups', link: '/strategy/local-groups' },
          { text: '📖 Training & support', link: '/strategy/training-support' },
          { text: '🗺️ Dashboard', link: '/strategy/dashboard' },
        ],
      },
      {
        text: 'Developers',
        items: [
          { text: '✅ Features', link: '/' },
          { text: '🛠️ Tech stack', link: '/' },
          { text: '👀 Storybook', link: '/' },
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
