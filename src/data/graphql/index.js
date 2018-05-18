import embedSvgs from '@seamonster-studios/embed-svgs'
//
import getAPIData from './api'
import graphqlQuery from './query'

const menu = [
  {
    url: '/about',
    label: 'About Us',
  },
  {
    url: '/contact',
    label: 'Contact Us',
  },
]

export default async function getRoutes() {
  const {
    ...values
  } = await embedSvgs(await getAPIData(graphqlQuery), true)


  return [
      { ...contact, component: 'src/views/Contact' },
      {
        slug: '/',
        component: 'src/views/Home',
        getData: () => ({
          menu,
        }),
      },
    ]),
  ]
}
