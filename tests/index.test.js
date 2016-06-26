const test = require('tape')
const range = require('../src/index.js')

test('create range of 5', t => {
  const prefix = 'www.example.com?page='
  const count = 5
  const expected = [
    'www.example.com?page=0',
    'www.example.com?page=1',
    'www.example.com?page=2',
    'www.example.com?page=3',
    'www.example.com?page=4'
  ]
  t.deepLooseEqual(range(prefix, count), expected)
  t.end()
})

test('create range of 1 to 5', t => {
  const prefix = 'www.example.com?page='
  const count = {
    start: 1,
    end: 5
  }
  const expected = [
    'www.example.com?page=1',
    'www.example.com?page=2',
    'www.example.com?page=3',
    'www.example.com?page=4',
    'www.example.com?page=5'
  ]
  t.deepLooseEqual(range(prefix, count), expected)
  t.end()
})

test('create range of 1 to 5 starting with: www.example.com', t => {
  const prefix = 'www.example.com?page='
  const count = {
    start: 1,
    end: 5
  }
  const startWith = 'www.example.com'
  const expected = [
    'www.example.com',
    'www.example.com?page=1',
    'www.example.com?page=2',
    'www.example.com?page=3',
    'www.example.com?page=4',
    'www.example.com?page=5'
  ]
  t.deepLooseEqual(range(prefix, count, startWith), expected)
  t.end()
})
