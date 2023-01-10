export const timeConversion = (s) => {
  if (typeof s !== 'string') throw new Error('parameter should be a string')

  const time = s.split(':')
  let hours = time[0]
  const minutes = time[1]
  const lastPart = time[2]
  const zone = lastPart.slice(2, 4)
  const seconds = lastPart.slice(0, 2)

  if (zone === 'AM') {
    if (hours === '12') hours = '00'
  } else {
    hours = hours === '12' ? '12' : parseInt(hours) + 12
  }

  return hours + ':' + minutes + ':' + seconds
}
