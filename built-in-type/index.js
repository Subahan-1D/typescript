// built in data type : number , string , void , boolean , void, undefined , null 
var userId;
var fullName;
var firstName;
var lastName;
var isAdmin;
userId = 100;
firstName = "Subahan";
lastName = " Ali";
isAdmin = true;
fullName = firstName.concat(lastName);
console.log("Your Id :  ".concat(userId, " Your Name : ").concat(fullName, " is Admin Access : ").concat(isAdmin));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase().split(" "));
function display() {
    console.log("Hi i am display");
}
display();
