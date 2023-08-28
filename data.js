let title = "Harry Potter"

console.log(title)

let author = "J.K.Rowling"

console.log(author)

let year = 1997

console.log(year)

let isNewerThan2000 = false

console.log(isNewerThan2000) // the book is older than 2000

let age = 2023 - 1997

console.log(age)

let characters = ["Hermione", "Ron", "Harry", "Hagrid"]

console.log(characters)

let myFirstCharacter = characters[0]
let mySecondCharacter = characters[1]

console.log(myFirstCharacter)
console.log(mySecondCharacter)

let favoriteBook = {
    title: "Harry Potter"
    year: 1997
    author: "J.K.Rowling"
    isNewerThan2000: false
    age: 26
    characters: ["Hermione", "Ron", "Harry", "Hagrid"]
}

console.log(favoriteBook)

console.log(favoriteBook.author)
console.log(favoriteBook.year)
mySecondCharacter = favoriteBook.charcters[1]
console.log(favoriteBook[mySecondCharacter])

let favoriteBooks = [
    {
        title: "Harry Potter"
        author: "J.K.Rowling"
        year: 1997
        isNewerThan2000: false
        age: 26
        characters: ["Hermione", "Ron", "Harry", "Hagrid"]
},
    {
        title: "Lord of the Rings"
        author: "J.R.R.Tolkien"
        year: 1954
        isNewerThan2000: false
        age: 69
        characters: ["Sam", "Legolas", "Gandalf", "Aragorn"]
 
}
]

let titleOfSecondFavoriteBook = favoriteBooks.title[1]
console.log(favoriteBooks[titleOfSecondFavoriteBook])

let charactersOfSecondFavoriteBook = favoriteBooks.characters[1]
console.log(favoriteBooks[titleOfSecondFavoriteBook])

let myfavoriteBook = 1997
let mySecondFavoriteBook = 1954

let sum = myfavoriteBook - mySecondFavoriteBook

console.log(sum)
