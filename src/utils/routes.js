import R from 'ramda'

export function structureRouteBlockData(item, blockTypes) {
  // create blocks array
  let blocks = []
  blockTypes.map(blockType => {
    item[blockType].map(blockItem => {
      blocks.push({
        blockType,
        ...blockItem,
      })
    })
  })

  // sort blocks by position
  blocks = R.reverse(R.sortBy(R.prop('blockPosition'), blocks))

  // remove old block properties from item, and add new blocks array
  return R.omit(blockTypes, {
    ...item,
    blocks,
  })
}
