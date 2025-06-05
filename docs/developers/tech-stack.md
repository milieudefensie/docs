# Tech stack

This campaign website is build using the [Jamstack](https://jamstack.org/) architecture, which allows for fast iterations and innovation. All pages are statically generated at build time and served from a CDN. We're using Typescript for type safety and better code quality.

:::info
The list below is a concept, based on our experimental campaign website codebase. Our actual production tech stack differs (uses Plone CMS & Dato CMS).
:::

## Front-end

- [Nuxt.js](https://nuxtjs.org/): Vue.js framework
  - SSG (Static Site Generation) for performance
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [DaisyUI](https://daisyui.com/) for Tailwind CSS components

## Back-end

- [Firebase](https://firebase.google.com/) for authentication, realtime database and AI text generation
- [Directus](https://directus.io/) as headless CMS - soon
- [Windmill](https://www.windmill.dev/) for automation - soon

## Integrations

Analytics and A/B testing:

- [PostHog](https://posthog.com/) for open source analytics and A/B testing - soon
- Google Analytics
- Microsoft Clarity

## Development tools

- [Storybook](https://storybook.nuxtjs.org/) for component development
- [PNPM](https://pnpm.io/) for package management

## Other tools

- [Signal](https://signal.org/) for local group chats
- See [package.json](https://github.com/milieudefensie/website/blob/main/package.json) for all dependencies
