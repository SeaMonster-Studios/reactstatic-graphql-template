/* globals process */
import { GraphQLClient } from 'graphql-request'
import dotenv from 'dotenv'

dotenv.config()

const endpoint = process.env.GRAPHQL_ENDPOINT
const token = process.env.GRAPHQL_TOKEN

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export default async function getAPIData(query) {
  const data = await client.request(query)

  return data
}
