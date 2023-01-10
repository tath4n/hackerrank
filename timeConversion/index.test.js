import { describe, expect, it } from 'vitest'
import { timeConversion } from '.'

describe('timeConversion', () => {
  it('should be a function', () => {
    expect(typeof timeConversion).toBe('function')
  })

  it('should throw if parameter not is a string', () => {
    expect(() => timeConversion()).toThrow()
  })

  it('should throw a specific error message if parameter not is a string', () => {
    expect(() => timeConversion()).toThrow('parameter should be a string')
  })

  it('should throw if return value not is a string', () => {
    expect(timeConversion('08:00:00AM')).toBeTypeOf('string')
  })

  it('should return 12:01:00 if value parameter is 12:01:00PM', () => {
    expect(timeConversion('12:01:00PM')).toBe('12:01:00')
  })

  it('should return 00:01:00 if value parameter is 12:01:00AM', () => {
    expect(timeConversion('12:01:00AM')).toBe('00:01:00')
  })

  it('should return 00:00:00 if value parameter is 12:00:00AM', () => {
    expect(timeConversion('12:00:00AM')).toBe('00:00:00')
  })

  it('should return 12:00:00 if value parameter is 12:00:00PM', () => {
    expect(timeConversion('12:00:00PM')).toBe('12:00:00')
  })

  it('should return 19:05:45 if value parameter is 07:05:45PM', () => {
    expect(timeConversion('07:05:45PM')).toBe('19:05:45')
  })

  it('should return 06:40:03 if value parameter is 06:40:03AM', () => {
    expect(timeConversion('06:40:03AM')).toBe('06:40:03')
  })
})
