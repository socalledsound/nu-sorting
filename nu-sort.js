const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
  { 
    id: 0,
    name: 'guitar',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 1,
    name: 'xylophone',
    type: INSTRUMENT_TYPE_PERCUSSION
  },
  {
    id: 2,
    name: 'zither',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 3,
    name: 'bagpipes',
    type: INSTRUMENT_TYPE_WIND
  },
];

const sortItems = objArr => { 
  return ([...objArr].sort((a, b) => { 
    let nameA = a.name.toUpperCase();   
    let nameB = b.name.toUpperCase();   
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0; 
  })); 
} 

function sortArray(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(sortArray([3,1,2]));






const numbers = [1, 2, 5, 3, 2];

const mySortingFunction  = (a, b) => {
  return (b > a) ? -1 : a > b ? 1 : 0
}


const sortNumbers = (arr) => {
  return ([...arr].sort(mySortingFunction))

}


console.log(sortNumbers(numbers));



console.log(sortItems(instruments)[0].id); 
console.log(instruments); 

// const getType = (objArr, type) => objArr.filter(obj => obj.type === type); 
// console.log(getType(instruments, INSTRUMENT_TYPE_STRING)); 

// const getNames = (objArr) => objArr.map(obj => obj.name); 
// console.log(getNames(instruments)); 
// console.log(getNames(getType(instruments, INSTRUMENT_TYPE_STRING))); 