// function signature syntax ..............>
let userInfo : () => void ;

let userInfo1 : (name : string) => void  ;

let userInfo2 : (name : string , age: number , admin : true) => string;

userInfo = () =>{
    console.log("Md Subahan Ali Is a Bad Boy")
}
userInfo1 =(name : string) =>{
    console.log(`${name} Is a Good Boy`)
}
userInfo2 =(name : string , age:number, admin:true) =>{
    return `${name} Is a Good Boy . and age ${age} is a owner ${admin}`;
}
userInfo()
userInfo1("Md Subahan Ali")
console.log(userInfo2("Md.Subahan Ali",30,true))

