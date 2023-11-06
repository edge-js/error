/*
 * edge-error
 *
 * (c) Edge
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { EdgeError } from '../index.js'

test('raise error with given filename', ({ assert }) => {
  const error = new EdgeError('unclosed tag slot', 'E_UNCLOSED_TAG', {
    line: 2,
    col: 0,
    filename: 'index.edge',
  })
  assert.equal(error.filename, 'index.edge')
  assert.equal(error.code, 'E_UNCLOSED_TAG')
  assert.equal(error.line, 2)
  assert.equal(error.col, 0)
})

test('patch error stack with the filename and line:col', ({ assert }) => {
  const error = new EdgeError('unclosed tag slot', 'E_UNCLOSED_TAG', {
    line: 2,
    col: 0,
    filename: 'index.edge',
  })
  assert.equal(error.stack!.split('\n')[1], '    at anonymous (index.edge:2:0)')
})
