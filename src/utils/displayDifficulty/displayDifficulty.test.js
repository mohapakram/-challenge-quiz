/* eslint-disable */
import displayDifficulty from './displayDifficulty'

it('shows the right # of starts matching the difficulty', () => {
  expect(displayDifficulty('hard')).toEqual('★★★')
  expect(displayDifficulty('easy')).toEqual('★✰✰')
  expect(displayDifficulty('medium')).toEqual('★★✰')
})
