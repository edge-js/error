<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Edge error](#edge-error)
  - [Usage](#usage)
  - [Maintainers](#maintainers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Edge error
> Create errors custom stack trace pointing to the Edge source file

[![circleci-image]][circleci-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url]

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

[circleci-image]: https://img.shields.io/circleci/project/gh/edge-js/error/master.svg?style=for-the-badge&logo=circleci
[circleci-url]: https://circleci.com/gh/edge-js/edge-error "circleci"

[npm-image]: https://img.shields.io/npm/v/edge-error.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/edge-error "npm"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/aur/license/pac.svg?style=for-the-badge
