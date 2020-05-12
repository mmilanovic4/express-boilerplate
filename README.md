<p align="center">
	<img src="static/img/logo.png" alt="Express boilerplate">
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/mmilanovic4/express-boilerplate" alt="License">
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
npm run build:client:prod
npm run build:server:prod
npm run start:prod
```

## Development

```
# First terminal
npm run build:client:dev

# Second terminal
npm run build:server:dev

# Third terminal
npm run start:dev
```

Differences between PROD and DEV:

- `webpack.mode` is set to `production` if started in PROD or to `development` if started in DEV
- `webpack.watch` is set to `true` if started in DEV

## Profiling

To profile your JavaScript application simply run:

```
npm run build:client:stats
npm run build:server:stats
```

Now `stats.json` file is generated in your project's root directory and you can open it with [webpack analyse](https://github.com/webpack/analyse) or some [other build analysis tool](https://survivejs.com/webpack/optimizing/build-analysis/).

## HTTPS

You can provide SSL key pair via `.env` configuration file. From [Let's Encrypt documentation](https://letsencrypt.org/docs/certificates-for-localhost/):

The simplest way to generate a private key and self-signed certificate for localhost is with this openssl command:

```
openssl req -x509 -out localhost.crt -keyout localhost.key \
	-newkey rsa:2048 -nodes -sha256 \
	-subj '/CN=localhost' -extensions EXT -config <( \
	 printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

You can then configure your local web server with localhost.crt and localhost.key, and install localhost.crt in your list of locally trusted roots.

## React Server-side rendering

React SSR is available if you're building your UI with React. If you need React CSR take a look at [React boilerplate](https://github.com/mmilanovic4/react-boilerplate).

## Work in progress

See [issues](https://github.com/mmilanovic4/express-boilerplate/issues) for to-do list.
