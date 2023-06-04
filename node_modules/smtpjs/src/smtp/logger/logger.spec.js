const Logger = require('./Logger')

describe('logger', () => {
  const originalInfo = console.info
  const originalLog = console.log
  const originalWarn = console.warn
  const originalError = console.error

  let infoMock
  let logMock
  let warnMock
  let errorMock

  beforeEach(() => {
    infoMock = jest.fn()
    logMock = jest.fn()
    warnMock = jest.fn()
    errorMock = jest.fn()

    console.info = infoMock
    console.log = logMock
    console.warn = warnMock
    console.error = errorMock
  })

  afterEach(() => {
    console.info = originalInfo
    console.log = originalLog
    console.warn = originalWarn
    console.error = originalError
  })

  it('when custom level is not set', () => {
    const options = {}
    const log = new Logger(options)
    log.info('hello world')
  })

  it('when level is warn it logs warnings and up', () => {
    const log = new Logger({ level: 'warn' })
    const error = log.error('error')
    const warn = log.warn('warn')
    const info = log.info('info')

    expect(errorMock).toHaveBeenCalled()
    expect(warnMock).toHaveBeenCalled()
    expect(infoMock).not.toHaveBeenCalled()

    expect(error.includes('error'))
    expect(warn.includes('warn'))
    expect(info).toBe(undefined)
  })
})