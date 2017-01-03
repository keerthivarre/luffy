export function getRandomChosenAnimal(animalList){

  return animalList.splice(Math.floor(Math.random()*animalList.length),1);

}

export function getRandomSelectionOfAnimals(animals){

  let set = new Set();

  for(;;){
    let i = Math.floor(Math.random()*animals.length);
    set.add(animals[i]);
 // console.log(set);
    if(set.size == 4){
      break;
    }
  }
  return Array.from(set);
}
