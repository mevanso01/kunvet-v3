# Kunvet

**Kunvet** is a job search platform. Newcomers should read this document in its
entirety before making changes.

The app is primarily written in JavaScript, with a Node.js backend and a
static Progressive Web App as the frontend. The backend stores data with
MongoDB and exposes a GraphQL API to the client.

## Getting started

You must use [Yarn](https://yarnpkg.com/) to install dependencies. This keeps
package versions consistent across team members. Before continuing, make sure
that you have [MongoDB](https://www.mongodb.com/) installed and running. The
default configuration should be enough for development.

To install dependencies and run the app, run:

```bash
yarn
yarn start
```

By default, the backend will start on port 3000, and the dev server for the
client will start on port 8080. Navigate to http://localhost:3000/graphiql
to get an interactive GraphiQL interface.

To build for production, run:

```
yarn
yarn run build
```

By default the backend uses `mongodb://localhost/kunvet-dev` as the
database. You need to configure it to use production credentials when deploying
for production.

## Navigating the Source

The app is split into three main parts:

- `server`: The Node.js backend.
- `client`: The Progressive Web App frontend.
- `common`: Code shared between client and server.

## Style Guide

The project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),
with a few restriction removed, as defined in `.eslintrc.js`. The project will
refuse to build if there is any code that violates the guidelines.

## Adding dependencies

Important: You must use `yarn` to manage dependencies.

1. Determine its license. Some software cannot be used due to its license. See
the Licensing section for details.
2. Choose between `devDependencies` and `dependencies`. As a rule of thumb,
choose `dependencies` when the package itself will run on the target platform
in production. For example, `webpack` is in `devDependencies`, while `graphql`
is in `dependencies`.
3. Add a dev dependency with `yarn add --dev [package]`, and non-dev package
with `yarn add [package]`.

## Licensing

Kunvet is proprietary software. The app depends on several open-source packages,
the licenses of which may be accessed by running `yarn licenses ls`.

Before adding a dependency package, you must check that its license does not
complicate the project's open-source compliance. Specifically, Kunvet must
remain closed-source, while being able to used for commercial purposes and
accessed over the web.

A partial list of forbidden licenses is as follows:

- GNU General Public License
- GNU Affero General Public License
- Any Creative Commons combination with "NonCommercial" (NC) and/or
"NoDerivs" (ND)


