
# LIKO-12's Official Website

This is the source-code of LIKO-12's official website.

It's built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Running the website locally

### Requirements

- Node.js 16 LTS or later.
- Yarn Classic 1.x (available in nodejs `corepack`).

### Installing Dependencies

```sh
yarn
```

### Local Preview Server

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

Just push the changes into the main branch and a GitHub Actions workflow with automatically build and deploy the website to https://liko-12.github.io/.
