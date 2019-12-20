<p align="center">
	<img src="static/img/logo.png" alt="Express boilerplate">
</p>

# Overview

A simple boilerplate for creating Express applications.

## Setup

```
git clone https://github.com/mmilanovic4/express-boilerplate.git
cd express-boilerplate
npm install
```

## Production

```
npm run clean
npm run build:prod
npm run start:prod
```

## Development

You can use this boilerplate with your own server (e.g. Express), then you can just run build script with development flag:

```
# First terminal
npm run build:dev

# Second terminal
npm run start:dev
```

Differences between `build:prod` and `build:dev`:

- `webpack.mode` is set to `production` if started via `build:prod` or to `development` if started via `build:dev`
- `webpack.watch` is set to `true` if started via `build:dev`

## Profiling

To profile your JavaScript application simply run:

```
npm run build:stats
```

Now `stats.json` file is generated in your project's root directory and you can open it with [webpack analyse](https://github.com/webpack/analyse) or some [other build analysis tool](https://survivejs.com/webpack/optimizing/build-analysis/).

## Work in progress

See [issues](https://github.com/mmilanovic4/express-boilerplate/issues) for to-do list.
