
//-------------------------object literal notation-------------------------------------------------------------
// const student={fname:"sugan",father:"panneer" ,age:25,city:"jayankondam",
// about: function(){
// return `${this.fname} is from ${this.city}`
// },
// eligibility:function() {
//     return this.age>18
// }};
// console.log(student);
// console.log(student.about());
// function newentry(fname,father,age,city)//create function
// {
// const newlyadd={};
// newlyadd.fname=fname;
// newlyadd.father=father;
// newlyadd.age=age;
// newlyadd.city=city;
// newlyadd.about= function(){
//     return `${this.fname} is from ${this.city}`
//     },
// newlyadd.eligibility=function() {
//     return this.age>18
// }

// }
// console.log(newentry("shailaja","ravi",23,"madurai"))
//----------------------------------------factory function type---------------------------------------


// const student={about: function(){
//     return `${this.fname} is from ${this.city}`
//      },
//      eligibility:function() {
//          return this.age>18
//      }};
// function newentry(fname,father,age,city)//create function
// {
// const newlyadd={};
// newlyadd.fname=fname;
// newlyadd.father=father;
// newlyadd.age=age;
// newlyadd.city=city;
// newlyadd.about= function(){
//     return `${this.fname} is from ${this.city}`
//     },
// newlyadd.eligibility=function() {
//     return this.age>18
// }
//  newlyadd.about=student.about;
//  newlyadd.eligibility=student.eligibility;
// return newlyadd;
// }
// console.log(newentry("shailaja","ravi",23,"madurai"))
//-----------------------------prototype inheritance-----------------------------
// const student={about: function(){
//     return `${this.fname} is from ${this.city}`
//      },
//      eligibility:function() {
//          return this.age>18
//      }};
// function newentry(fname,father,age,city)//create function
// {
// const newlyadd=Object.create(student);
// newlyadd.fname=fname;
// newlyadd.father=father;
// newlyadd.age=age;
// newlyadd.city=city;
// newlyadd.about= function(){
//     return `${this.fname} is from ${this.city}`
//     },
// newlyadd.eligibility=function() {
//     return this.age>18
// }
 
// return newlyadd;
// }
// console.log(newentry("shailaja","ravi",23,"madurai"))
