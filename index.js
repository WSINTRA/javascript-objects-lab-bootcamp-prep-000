var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){

  obj[key] = value
  newObject = Object.assign({}, obj)
  return newObject
}
