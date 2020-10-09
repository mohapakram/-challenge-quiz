/* eslint-disable */
import decodeString from './decodeString'

it('successfully make string readable', () => {
  const string = 'Entertainment%3A%20Video%20Games'
  expect(decodeString(string)).toEqual('Entertainment: Video Games')
})
