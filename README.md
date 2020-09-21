<div align="center"><img src="https://res.cloudinary.com/adonis-js/image/upload/q_100/v1600679850/edge-banner_wao6ex.png" width="600px"></div>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Edge error](#edge-error)
  - [Usage](#usage)
  - [Maintainers](#maintainers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Edge error
> Create errors custom stack trace pointing to the Edge source file

[![circleci-image]][circleci-url] [![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url] [![audit-report-image]][audit-report-url]

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
[audit-report-image]: https://img.shields.io/badge/-Audit%20Report-blueviolet?style=for-the-badge
[audit-report-url]: https://htmlpreview.github.io/?https://github.com/edge-js/error/blob/develop/npm-audit.html 'audit-report'
