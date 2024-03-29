/*
 * edge-error
 *
 * (c) Edge
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { ExceptionOptions } from './types.js'

export class EdgeError extends Error {
  line: number
  col: number
  filename: string

  constructor(
    public message: string,
    public code: string,
    options: ExceptionOptions
  ) {
    super(message)
    this.line = options.line
    this.col = options.col
    this.filename = options.filename

    const stack = this.stack!.split('\n')
    stack.splice(1, 0, `    at anonymous (${this.filename}:${this.line}:${this.col})`)
    this.stack = stack.join('\n')
  }
}
