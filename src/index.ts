/*
 * edge-error
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export type ExceptionOptions = {
	line: number
	col: number
	filename: string
}

export class EdgeError extends Error {
	public line: number
	public col: number
	public filename: string

	constructor(public message: string, public code: string, options: ExceptionOptions) {
		super(message)
		this.line = options.line
		this.col = options.col
		this.filename = options.filename

		const stack = this.stack!.split('\n')
		stack.splice(1, 0, `    at anonymous (${this.filename}:${this.line}:${this.col})`)
		this.stack = stack.join('\n')
	}
}
