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

- [Directus](https://directus.io/) as headless CMS - soon
- [Windmill](https://www.windmill.dev/) for automation - soon

## Integrations

Analytics and A/B testing:

- [PostHog](https://posthog.com/) for open source analytics and A/B testing - soon
- Google Analytics
- Microsoft Clarity

## Development tools

- Storybook for component development
- PNPM for package management

## Other tools

- Signal for local group chats
