// enum Constance : nod duplicate data storage

//enum data 3 types : numeric , string , heterogenous 

// numeric enum
enum RequestType{
    readData,
    saveData,
    deleteData,
}
// console.log(RequestType)

// string enum 

enum RequestType2{
    readData = "READ_DATA",
    deleteData="DELETE_DATA",

}
// console.log(RequestType2['deleteData'])


// heterogenous
enum RequestType3{
    readData = "READ_DATA",
    deleteData="DELETE_DATA",
    roll = 677317
}
console.log(RequestType3)


