let users : object[] ;
users = [] ;
// custom data type

type user = {userName :string, userID : number ,isAdmin : boolean} 

let user1 : user;
user1 = {userName : "Subahan", userID : 44 , isAdmin : true}  ;
let user2 : user ;
user2 = {userName:"Rasel",userID:45, isAdmin:false}
users.push(user1)
users.push(user2)
console.log(users)