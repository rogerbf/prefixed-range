const range = (prefix, range, startWith) => {

  const start = typeof(range) === 'object' ? range.start : 0
  const end = typeof(range) === 'object' ? range.end + 1 : range

  if (startWith) {
    return Array.of(startWith).concat(
      Array(end).fill('').map((el, i) => prefix + i).slice(start, end)
    )
  }
  else {
    return Array(end).fill('').map((el, i) => prefix + i).slice(start, end)
  }

}

module.exports = range
