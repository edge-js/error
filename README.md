# edge-error
> Create errors custom stack trace pointing to the Edge source file

[![travis-image]][travis-url]
[![npm-image]][npm-url]
![](https://img.shields.io/badge/Uses-Typescript-294E80.svg?style=flat-square&colorA=ddd)

## Usage
Grab the package from npm as `edge-error`

```bash
npm i edge-error
```

Then use it as follows

```
const { EdgeError } = require('edge-error')
throw new EdgeError('message', 'status', {
  line: 1,
  col: 2,
  filename: '/path/to/index.edge'
})
```

## Change log

The change log can be found in the [CHANGELOG.md](https://github.com/poppinss/edge-error/CHANGELOG.md) file.

## Contributing

Everyone is welcome to contribute. Please go through the following guides, before getting started.

1. [Contributing](https://adonisjs.com/contributing)
2. [Code of conduct](https://adonisjs.com/code-of-conduct)


## Authors & License
[thetutlage](https://github.com/thetutlage) and [contributors](https://github.com/poppinss/edge-error/graphs/contributors).

MIT License, see the included [MIT](LICENSE.md) file.

[travis-image]: https://img.shields.io/travis/poppinss/edge-error/master.svg?style=flat-square&logo=travis
[travis-url]: https://travis-ci.org/poppinss/edge-error "travis"

[npm-image]: https://img.shields.io/npm/v/edge-error.svg?style=flat-square&logo=npm
[npm-url]: https://npmjs.org/package/edge-error "npm"
