export const flattenNomenclature = (arr) => {
  if (!Array.isArray(arr)) return []

  return arr.flatMap(item => [
    ...(item.nomenclature || []),
    ...(item.children ? flattenNomenclature(item.children) : [])
  ])
}

export const flattenWithParent = (arr, parentName = null) => {
  if (!Array.isArray(arr)) {
    return []
  }

  return arr.flatMap(item => {
    const current = { ...item }
    delete current.children
    if (parentName) {
      current.parentName = parentName
    }

    const children = item.children ? flattenWithParent(item.children, item.name) : []
    return [current, ...children]
  })
}

export const findNestedItemById = (groups, id) => {
  let nestedItem = null

  groups.forEach(group => {
    if (group.nomenclature) {
      const item = group.nomenclature.find(item => item.id === id)
      if (item) {
        nestedItem = item
      }
    } else {
      if (group.id === id) {
        nestedItem = group
      }
    }
  })

  return nestedItem
}

export const findCriticalQty = (id, arr) => {
  const correspondingItem = arr.find(item => item.id === id)
  return correspondingItem ? correspondingItem.critical_qty : 0
}
