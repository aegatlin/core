# Core

Core is an experiment in component reusability.

The idea is to have copy-and-pastable snippets of code that make for simple yet complete starting points for your component system.

The motivation is that component libraries are (hypothesis) fundamentally inadequate in that they don't ultimately give you control. At the end of the day, you will want to customize your components in some manner that your library won't let you. Or, if they let you, they have made the component so complicated and/or exposed so many APIs on it that it is unpleasant to work with. The solution is to "just" make your own components each time. This suffers from the problem of tedium. To solve the tedium problem, a living repo of "just components" that you do NOT install as a dependency, but instead copy the code from, means that (1) you get a sophisticated starting point for your basic components, and (2) it is not a static resource (because this repo will be maintained and upgraded over time).

## Todos

-[] Something like a `Blur` component is now in use in Modal and Drawer. Should a `Blur` component exist?

## Captain's Log

- No `Link` component exists because link-optimization is currently a "framework thing", e.g., `next/link` in Next.js. In order to avoid complexity, I am choosing to NOT build a link component.