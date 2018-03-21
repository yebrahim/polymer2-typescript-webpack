# Polymer 2 + Typescript + Webpack boilerplate

## Getting Started

`npm install`:    Download all dependencies.

`npm start`:      Start the development server with hot module reload.

`npm run build`: Build a production bundle. This results in a `dist`
directory with the bundled `app.js` file, `index.html` entrypoint,
`styles.css`, and all required `bower_components`. You can start a static
file server to try out the production build, for example: `npm i -g serve &&
serve dist`.

## What and Why?

This is a simple skeleton project for using Polymer 2 with Typescript. It
mainly tries to achieve the following goals:
- Splitting Polymer code to separate `.ts`, `.html`, and `.css` files.
- Support for hot module reload to see changes immediately while developing.
- Use Javascript imports instead of HTML imports, which are [not getting much
love from browser
vendors](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports).
- Support for using `npm` packages in code without jumping into hoops.
- Sharing common styles across Polymer components without having to build an
HTML module, or use [deprecated external
stylesheets](https://www.polymer-project.org/2.0/docs/devguide/style-shadow-dom#external-stylesheets).
- Building a minified bundle for production.

It does this by using `webpack` and `webpack-dev-server` along with the
awesome `polymer-webpack-loader`. It also supports bundling CSS files, and
importing CSS within Polymer components, which paves the way for supporting
shared styles nicely.

Webpack's `import` mechanism is flexible enough to allow importing and
bundling Javascript modules into web components, which means HTML imports are
not needed, and `npm` modules are very easy to import and use too.

## Tech Stack

- Polymer 2
- Typescript
- Webpack
- Polymer Typescript decorators
- tslint

## Structure

```
- index.html:             browser entry point, and the single page application's
                          only HTML page.
- src/
  - index.ts:             logic entry point, app root component and CSS are
                          imported here.
  - components/           web components, separated into a directory for each.
    - app-shell/          an example web component
      - app-shell.html:   component's view
      - app-shell.ts:     component's logic
      - app-shell.css:    component's styles
  - lib/                  other application logic (apis, logging, ... etc)
  - styles/               common style files that can be imported anywhere
```

## App Size

Polymer is a small library, which is one of the reasons I prefer it to its
competitors when working on a small to medium sized app. This set up tries to
keep that true. When building for production, this skeleton app generates a
bundled `app.js` that is around ~100KB.
