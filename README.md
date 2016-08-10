# prefixed-range

Creates an array of a prefixed range.

``` bash
npm install prefixed-range
```

## Usage

``` javascript
const range = require('prefixed-range')

const prefix = 'poof'

range(prefix, 3)
// ['poof0', 'poof1', 'poof2']
```

## API

Create a prefixed range with a length of 3, starting with 0:

``` javascript
range('prefix', 3)
// ['prefix0', 'prefix1', 'prefix2']
```

Create a prefixed range with a length of 3, starting with 1:

``` javascript
range('prefix', { start: 1, end: 3 })
// ['prefix1', 'prefix2', 'prefix3']
```

As a convenience you can also append a value as the first element of the resulting array:

``` javascript
range('prefix', { start: 1, end: 3 }, 'poof')
// ['poof', 'prefix1', 'prefix2', 'prefix3']
```

Which is the same as:

``` javascript
Array.of('poof').concat(range('prefix', { start: 1, end: 3 }))
```
