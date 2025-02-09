// function signature syntax ..............>
var userInfo;
var userInfo1;
var userInfo2;
userInfo = function () {
    console.log("Md Subahan Ali Is a Bad Boy");
};
userInfo1 = function (name) {
    console.log("".concat(name, " Is a Good Boy"));
};
userInfo2 = function (name, age, admin) {
    return "".concat(name, " Is a Good Boy . and age ").concat(age, " is a owner ").concat(admin);
};
userInfo();
userInfo1("Md Subahan Ali");
console.log(userInfo2("Md.Subahan Ali", 30, true));
