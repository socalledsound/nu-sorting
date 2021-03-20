const customers = [{
    id: 110,
    name : 'Tim Smith',
    cartItems : [{
        name : 'toggler',
        description: 'a thing that toggles',
        },
        {
            name : 'grape',
            description: 'a green fruit',
        },
        {
            name : 'rock',
            description: 'a rock'
        }]
},
{
    id: 70,
    name : 'Xiao Yuen',
    cartItems : [{
        name : 'toggler',
        description: 'a thing that toggles',
        },
        {
            name : 'lemon',
            description: 'a yellow fruit',
        },
        {
            name : 'paper',
            description: 'paper'
        }]

},
{
    id: 10223,
    name : 'Octavia Butler',
    cartItems : [{
        name : 'toggler',
        description: 'a thing that toggles',
        },
        {
            name : 'tomato',
            description: 'a red fruit',
        },
        {
            name : 'scissors',
            description: 'scissors'
        }]

}]



const customersByNumber = customers.sort( (a, b) => a.id < b.id );
console.log(customersByNumber);




const hasPaper = customers.reduce( (acc, customer) => {
    if(customer.cartItems.filter === 110){
        acc.push(customer.id);
    }
    return acc

}, [])

// console.log(hasPaper);




// const myPeopleObj = peopleArr.reduce((acc, person) => {
//     return {
//         ...acc,
//         [person.username] : person
//     }
// }, {});



// const fruits = customers.reduce((acc, cur) => {
//     return 
// }, []);

// const hasPaper = customers.map( customer => {
//     console.log(customer.cartItems);
//     if(customer.cartItems.filter(item => item.name === 'paper').length > 0){
//         return customer.name
//     }
// })


// const hasPaper = customers.reduce((acc, cur) => {
//     if(cur.cartItems.filter(item => item.name === 'paper').length > 0){
//         acc.push(cur.name);
//     }
// }, [])


// console.log(hasPaper);


//  console.log(hasPaper);

// carts.forEach(cart => {
//     console.log(cart);
// })


// // const carts = customers.map( customer => customer.cartItems);
// const paper = carts.filter(cart => cart.map(item => item.name) === 'paper');
//  console.log(paper);
// hasGrape.forEach((cart, i) => {
//     console.log(i, cart);
// })