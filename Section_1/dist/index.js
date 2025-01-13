"use strict";
let x = 5;
let y = ['String'];
let z = x + y;
const person1 = {
    name: 'juan',
    age: 41,
    isStudent: true
};
const person2 = {
    name: 'tesla',
    age: 3,
    isStudent: false
};
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
person1.gender = Gender.Male;
person2.gender = Gender.Female;
console.log(person1);
console.log(person2);
//# sourceMappingURL=index.js.map