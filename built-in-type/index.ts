// built in data type : number , string , void , boolean , void, undefined , null 

let userId : number;
let fullName : string ;
let firstName: string ;
let lastName: string ;
let isAdmin : boolean ;
 
userId= 100 ;
firstName="Subahan" ;
lastName =" Ali";
isAdmin = true;
fullName = firstName.concat(lastName)

console.log(`Your Id :  ${userId} Your Name : ${fullName} is Admin Access : ${isAdmin}`)

console.log(fullName.split(" "));
console.log(fullName.toUpperCase().split(" "));


function display () : void {
    console.log("Hi i am display")
}
display()