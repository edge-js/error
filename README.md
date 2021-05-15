<div align="center"><img src="https://res.cloudinary.com/adonis-js/image/upload/v1620150474/edge-banner_tzmnox.jpg" width="600px"></div>

# Edge error
> Create errors custom stack trace pointing to the Edge source file

[![gh-workflow-image]][gh-workflow-url] [![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url] [![synk-image]][synk-url]

The package extends the native Error class and adds support for pushing an error stack frame pointing to an Edge template.

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
  filename: 'absolute/path/to/index.edge'
})
```

[gh-workflow-image]: https://img.shields.io/github/workflow/status/edge-js/error/test?style=for-the-badge
[gh-workflow-url]: https://github.com/edge-js/error/actions/workflows/test.yml "Github action"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"

[npm-image]: https://img.shields.io/npm/v/edge-error.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/edge-error 'npm'

[license-image]: https://img.shields.io/npm/l/edge-error?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md 'license'

[synk-image]: https://img.shields.io/snyk/vulnerabilities/github/edge-js/error?label=Synk%20Vulnerabilities&style=for-the-badge
[synk-url]: https://snyk.io/test/github/edge-js/error?targetFile=package.json "synk"
