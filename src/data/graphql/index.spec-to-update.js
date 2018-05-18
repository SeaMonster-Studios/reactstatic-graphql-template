// //
// import getRoutes from './'
// import mockData from './mock-data.json'

// let routes

// beforeAll(async () => {
//   jest.mock('./api.js', () => mockData)
//   jest.mock('@seamonster-studios/embed-svgs', data => data)
//   routes = await getRoutes()
// })

// it('Returns an array of data', () => {
//   expect(Array.isArray(routes)).toBeTruthy()
// })

// it('Returns an array of items that match the required structure for react-static', () => {
//   let childItemsLength = 0
//   routes.map(item => {
//     if (item.hasOwnProperty('children')) {
//       childItemsLength += item.children.length
//     }
//   })

//   expect.assertions((childItemsLength + routes.length) * 3)

//   routes.map(item => {
//     expect(item).toHaveProperty('component')
//     expect(item).toHaveProperty('path')
//     expect(item).toHaveProperty('getData')

//     if (item.hasOwnProperty('children')) {
//       item.children.map(child => {
//         expect(child).toHaveProperty('component')
//         expect(child).toHaveProperty('path')
//         expect(child).toHaveProperty('getData')
//       })
//     }
//   })
// })
