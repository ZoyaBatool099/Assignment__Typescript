interface item {
    name: string
    price: number
}
//creat two objects//
const book: item ={
    name: 'Essential Typescript'
    price: 500
}
const novel: item ={
    name: 'A Wrinkle in Time'
    price: 549
}
console.log(`book name : ${book.name}, price; $${book.price}`)
console.log(`novel name : ${novel.name}, price; $${novel.price}`)

