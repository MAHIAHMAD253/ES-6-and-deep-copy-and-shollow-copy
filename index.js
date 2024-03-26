// let arr = [12,13,14,15,16,17];

// let ans = arr.map(x => x * 3)

// console.log(ans)
// console.log(arr)



// let arr = [12,2,34,567,76,32,132]
// arr.forEach(x => console.log( x * 12)) // does not provide the new array // unfine

// let ans2 = arr.map(x => x * 12)

// console.log(ans2)
// console.log(arr)

// let name1 = [14,23,4,5,6,78,89,9 ]
// let name2 = ['ahmad','asadd','jo b ha', 'in the end']

// // let name3 = name2.concat(name1)

// let name3 = name1.slice(2,4)
// console.log(name3)


 
//   let products1 = {
//     id:1,  
//     price:1000,
//     title: "hello",
//     color: ['black','red']
//   }

//   let products2 = {...products1}
//   products2.color = [...products1.color] // deep copy in color 
//   products2.color[1] = 'white'

//   console.log(products2)



// simple code imn deeep copy in arry value  


// let arr1 =[
//     [12,23,45,67,89],
//     [12,23,45,67,89],
//     [12,23,45,67,89],
// ]

// let arr2 = arr1

// arr2[0]= [...arr1[0]]
// arr2[1]= [...arr1[1]]
// arr2[2]= [...arr1[2]]

// arr2[1][3] = 1000

// console.log(arr2)


/// apply the map loop apply deep copy 


let ahmad = [
    [12,23,45,67,89],
    [12,23,45,67,89], // 33 ki jaga my ne 5000 liha ha  ????? 
    [12,23,45,67,89],
]

// apply the map loop map aleady the exist new array


let asad = ahmad.map(x => [...x])
asad[1][1] = 5000




console.log(asad)

 // This task is  array of object Exchange of index value

let products1 = [
    {
        id: 1,
        price:1000,
        tiltle: "ahmad"
    },
    {
        id: 1,
        price:1000,
        tiltle: "ahmad"
    },
    {
        id: 1,
        price:1000,
        tiltle: "ahmad"
    }
]


let products2 = products1.map( item => ({...item}))

products2[1].tiltle = 'good name'

console.log(products2)

