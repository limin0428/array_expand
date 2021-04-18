// 并集
const _union = (ary1, ary2) => {
  return [...new Set([...ary1, ...ary2])]
}

// 交集
const _intersection = (ary1, ary2) => {
  return ary1.filter(item => ary2.includes(item))
}

// 差集
const _except = (ary1, ary2) => {
  return ary2.filter(item => !ary1.includes(item))
}

// 冒泡排序
const _bubble = ary => {
  if (!Array.isArray(ary)) {
    throw Error('参数错误')
  }
  if (ary.length < 2) {
    return ary
  }
  for (let i = 0; i < ary.length; i++) {
    for (let j = 0; j < ary.length - i; j++) {
      if (ary[j] > ary[j+1]) {
        [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]]
      }
    }
  }
  return ary
}

// 快速排序
const _quick = ary => {
  if (ary.length < 1) {
    return ary
  }
  const aryCopy = [...ary]
  const pivotIndex = Math.floor(aryCopy.length/2)
  const pivot = aryCopy.splice(pivotIndex, 1)[0]
  const left = [], right = []
  aryCopy.forEach(item => {
    if (item > pivot) {
      right.push(item)
    } else {
      left.push(item)
    }
  })
  return _quick(left).concat(pivot,_quick(right))
}

// 利用Object排序
const _objSort = ary => {
  const obj = {}
  const sortAry = []
  ary.forEach(item => {
    if (obj[item]) {
      obj[item] = obj[item] + 1
    } else {
      obj[item] = 1
    }
  })
  for (let key in obj) {
    let step = 0
    while(step < obj[key]) {
      sortAry.push(Number(key))
      step++
    }
  }
  return sortAry
}

const _sort = (ary, name = 'bubble') => {
  let sortAry = null
  switch (name) {
    case "bubble":
      sortAry = _bubble(ary)
      break;
    case "quick":
      sortAry = _quick(ary)
      break;
    case "objSort":
      sortAry = _objSort(ary)
      break;
    default:
      break;
  }
  return sortAry
}

Array.prototype._union = _union
Array.prototype._intersection = _intersection
Array.prototype._except = _except
Array.prototype._sort = _sort

console.log(_sort(ary1))
console.log(_sort(ary1, 'quick'))
console.log(_sort(ary1, 'objSort'))

// console.log([].prototype._union(ary1, ary2))
// console.log([]._intersection(ary1, ary2))
// console.log([]._except(ary1, ary2))