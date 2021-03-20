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

console.log(sortItems(instruments)[0].id); 
console.log(instruments); 

// const getType = (objArr, type) => objArr.filter(obj => obj.type === type); 
// console.log(getType(instruments, INSTRUMENT_TYPE_STRING)); 

// const getNames = (objArr) => objArr.map(obj => obj.name); 
// console.log(getNames(instruments)); 
// console.log(getNames(getType(instruments, INSTRUMENT_TYPE_STRING))); 