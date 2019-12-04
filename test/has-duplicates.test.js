import test from 'ava'
import { hasDuplicates } from '../src'

test('Finds duplicates ', t => {
  const array = [1, 2, 3, 4, 5, 5]
  const expected = true
  const actual = hasDuplicates(array)
  t.deepEqual(actual, expected)
})

test('Finds no duplicates ', t => {
  const array = [1, 2, 3, 4, 5]
  const expected = false
  const actual = hasDuplicates(array)
  t.deepEqual(actual, expected)
})