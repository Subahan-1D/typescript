// enum Constance : nod duplicate data storage
//enum data 3 types : numeric , string , heterogenous 
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType)
// string enum 
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2['deleteData'])
// heterogenous
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["roll"] = 677317] = "roll";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
