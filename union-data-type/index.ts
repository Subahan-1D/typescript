let userId:number | string | boolean ;

userId ="11";
userId=101;
userId=-true;

function displayUserId(userId:number | string |boolean ){
    console.log(userId)
}
displayUserId(11)
displayUserId("11")
displayUserId(true)