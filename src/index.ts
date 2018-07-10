type ExceptionOptions = {
  line: number,
  col: number,
  filename: string,
}

export class EdgeError extends Error {
  public line: number
  public col: number
  public filename: string

  constructor (public message: string, public code: string, options: ExceptionOptions) {
    super(message)
    this.line = options.line
    this.col = options.col
    this.filename = options.filename

    const stack = this.stack!.split('\n')
    stack.splice(1, 0, `    at (${this.filename}:${this.line}:${this.col})`)
    this.stack = stack.join('\n')
  }
}
