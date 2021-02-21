<div align="center"><img src="https://res.cloudinary.com/adonis-js/image/upload/q_100/v1600679850/edge-banner_wao6ex.png" width="600px"></div>

# Edge error
> Create errors custom stack trace pointing to the Edge source file

[![circleci-image]][circleci-url] [![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url] [![synk-image]][synk-url]

## Usage
Install the package from npm registry as follows

```bash
npm i edge-error

# yarn
yarn add edge-error
```

Then use it as follows

```js
const { EdgeError } = require('edge-error')

throw new EdgeError('message', 'status', {
  line: 1,
  col: 2,
  filename: '/path/to/index.edge'
})
```

## Maintainers
[Harminder virk](https://github.com/thetutlage)

[circleci-image]: https://img.shields.io/circleci/project/github/edge-js/error/master.svg?style=for-the-badge&logo=circleci
[circleci-url]: https://circleci.com/gh/edge-js/error 'circleci'

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"

[npm-image]: https://img.shields.io/npm/v/edge-error.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/edge-error 'npm'

[license-image]: https://img.shields.io/npm/l/edge-error?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md 'license'

[synk-image]: https://img.shields.io/snyk/vulnerabilities/github/edge-js/error?label=Synk%20Vulnerabilities&style=for-the-badge
[synk-url]: https://snyk.io/test/github/edge-js/error?targetFile=package.json "synk"
