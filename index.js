class User {
    constructor(name, id){
        this.name = name
        this.id = id
        this.borrowedBooks = []
    }
    borrowBook = (book) =>{
      
        if(this.borrowedBooks.length === 3) return "You can no longer borrow books"
        
        if(this.borrowedBooks.includes(book)){
            return "This book has been borrowed"
        }
        else {
            this.borrowedBooks.push(book)
            book.isBorrowed()
            return "Book Added to List of borrowedBooks"
        }
    }

    returnBook = (book) =>{
        if(this.borrowedBooks.includes(book)){
            let index = this.borrowedBooks.indexOf(book)
            this.borrowedBooks.splice(index,1)   
            book.isBorrowed()
        }
    }
}


class Book {
    constructor(title, author, isbn, id){
        this.title = title
        this.author = author
        this.isbn = isbn
        this.id = id
        this.borrowed = false
    }

    isBorrowed = () =>{
        if(!this.borrowed) {
            this.borrowed = true
        }
        else {
            this.borrowed = false
        }
    }
}



class Library {
    constructor(){  
        this.users = []
        this.books = []
    }

    registerMembers = (user) =>{
       this.users.push(user)
    }
    addNewBook = (books) => {
        this.books.push(books)
    }
    borrowBook = (userToBorrow, book) => {
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].name === userToBorrow.name){
              
              if(this.users[i].borrowedBooks.length === 3){
                 console.log("No more books for you")
               } else{
                 this.users[i].borrowBook(book)
               }
            }

        }
    }
}