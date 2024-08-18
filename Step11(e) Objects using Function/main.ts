//Object Using Functions
function printBookDetails (Book:{
    name: string,
    author: {
        name: string,
        birthYear: number
    }})
{
    console.log("Title: " + Book.name);
    console.log("Author Name: " + Book.author.name);   
}
let myBook = {
    name:"The Great Gatsby",
    author : {
        name : "F.scott"  ,
        birthYear : 1896,
      }
}
printBookDetails(myBook)

console.log(printBookDetails(myBook));
