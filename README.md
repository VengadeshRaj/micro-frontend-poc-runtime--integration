# micro-frontend-poc-runtime--integration
POC of react micro frontend Runtime integration with custom script injection.

## Different ways to create React micro frontends:
React micro frontends (MFE) can be created in multiple ways depending on your architecture choice, deployment model, and team structure.
Here we have used Runtime Integration(#2) approach,Different approaches are listed below.

1. Webpack Module Federation (Most Popular)
    - Uses Webpack 5’s Module Federation Plugin to dynamically import components or entire apps from other builds at runtime.
2. Custom Runtime Integration
    - Each MFE is built as a Web Component
3. Iframes
    - Each micro frontend runs in an iframe embedded in the parent shell.
4. Single-spa
    - Framework-agnostic micro frontend orchestrator. You register apps (React, Angular, Vue, etc.) and single-spa decides which to load/unload based on route.
5. Build-time Integration (Monorepo with Lerna, Turborepo, Nx)
    - Multiple apps/components developed independently but bundled together during the build step into one React app.
6. Server-side Composition
    - Micro frontends are combined at the server level before sending HTML to the client


## Pros and Cons of Runtime Integration:

### Pros:
1. Works with CRA easily.
2. Teams can deploy independently.
3. No webpack-specific setup required.

### Cons:
1. Requires global functions → tight coupling.
2. No automatic dependency sharing (React can be duplicated).


## Prerequisites:
Node JS installed.

## Run the app locally:
- Go to the container app root folder
- Run `npm run start` command to start the container app.
- Ensure container app running properly in `localhost:3000`
- Open each mfe in order.
- Run `npm run start` command in each mfe root folder.
- Ensure mfe's running in allocated ports (eg. `localhost:9001` and `localhost:9002`)
- Refresh the container app to complete the integration.