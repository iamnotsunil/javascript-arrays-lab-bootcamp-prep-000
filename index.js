const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kitten
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(kittens, name){
  var newKittens = [...kittens]
  newKittens.push(name);
  return newkittens
}

function prependKitten(kittens, name){
  return [name,...kittens]
}

function removeFirstKitten(kittens){
  return kittens.slice(1)
}

function removeLastKitten(kittens){
  return kittens.slice(0,kittens.length-1)
}
