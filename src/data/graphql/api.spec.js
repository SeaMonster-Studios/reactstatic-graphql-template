import faker from 'faker'
import _ from 'lodash'
//
import getAPIData, { client } from './api'

let fakeData

beforeAll(() => {
  fakeData = _.times(faker.random.number(100), () => ({
    [faker.random.objectElement()]: faker.internet.avatar(),
    [faker.random.objectElement()]: faker.internet.email(),
    [faker.random.objectElement()]: faker.random.words(),
    [faker.random.objectElement()]: faker.random.uuid(),
    [faker.random.objectElement()]: faker.random.image(),
  }))
  client.request = jest.fn(() => fakeData)
})

it('getAPIData receives and returns that data.', async () => {
  const response = await getAPIData()
  const spy = jest.spyOn(client, 'request')

  expect(response).toBe(fakeData)
  expect(spy).toHaveBeenCalled()
})
