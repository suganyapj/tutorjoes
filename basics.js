//alert("hai darling")
// prompt("enter your age")
// console.log("hai dear");
// console.log(1234314);
// console.log(1.344);
// console.log(true);
// console.log([23,"suganya",false])
// console.log({fname:"suganya",age:23,city:"chrompet"})//json object
// console.table({fname:"suganya",age:23,city:"chrompet"})//table form
// console.error("inputerror");
// console.warn("be safe");
// console.clear();//to clear console
// console.time("start");
// for(i=0;i<10;i++){
//     console.log(i)
// }
// console.timeEnd("start");
//  var a=25;
//  var b=35;
//  console.log(a+b);
//  var d=new Date();//find currnet date time
//  console.log(d)
// let a=25;
// console.log(a,typeof a);
// a=String(a);
// console.log(a,typeof a);
// let b=true;
// console.log(b,typeof b);
// b=String(b);
// console.log(b,typeof b);
// let c=new Date();
// console.log(c, typeof c);
// c=String(c);
// console.log(c,typeof c)
// let d=[1,2,3,4]
// console.log(d, typeof d);
// d=String(d);
// console.log(d,typeof d)
//------------------------------------------------------------------
//nullish colerising operator

// let z=null??"fail";//if a value is null asingn value after question mark
// console.log(z)
// let y=40??20;
// console.log(y);
// const details={fname:"haseena",age:22}
// details.city??="chennai"
// console.log(details)
//function with return
// function adding(a,b){
// return a+b;
// }
// console.log("addition:",adding(12,13));
//function with arbitary arguments
// function sum(){
// let total=0;
// for(let i=0;i<arguments.length;i++){
//     total+=arguments[i];//run time input arguments is inbuildkeyword store data in arary form
// }
// return total;
// }
// console.log(sum(25,12));
// console.log(sum(90,34,2,123,));
// function add(...res){
// let total=0;
// for(let i=0;i<res.length;i++){
//     total+=udhay[i];//spread operator  anynew name
// }
// return total;
// }
// console.log(add(25,12));
// console.log(add(90,34,2,123,));


//----------------------------------------
// functiona expression s
// const d=function(a,b){
// return a+b;
// }
// console.log(d);
// console.log(d(25,56));
//arrowfunction es6

// const add=(a,b)=>{return a+b}//without function keyword functin name
// console.log(add);
// console.log(add(34,55))
//convert object tom array

// let employee={name:"kathir",age:33,role:"software developer"}
// const arr1=Object.keys(employee);
// const arr2=Object.values(employee);

// console.log(arr1 +":"+ arr2 )

// let  arr=[]; //1d array
// for( let i=0;i<3;i++)
// {
//     arr.push([]);
//     for( let j=0;j<3;j++){
// arr[i].push(j);
//     }
// }
// console.log(arr)
// foreach (value,index )
// const numbers=[23,12,34,56,78,89]
// numbers.forEach((number,index) => {console.log(number ,index) 
    
// });
// const peoples=[{name:"suanya",age:22},{name:"mani",age:92},{name:"valli",age:70},]
// peoples.forEach(people => {console.log("age:"+people.age)
    
// }); 
//sum array
// let ages=[2,32,23,35,12,78]
// let total=0;
// ages.forEach(age=>{total=total+age;

// })
// console.log("total:"+total);
// console.log("average:"+ total/ages.length)
// let ages=[2,32,23,35,12,78]
// let doubleages=[];
// ages.forEach(age=>{
//     doubleages.push(age*2)
// })
// console.log(doubleages)
// let ages=[2,32,23,35,12,78]
// let max=ages[0];
// let min=ages[0]
// ages.forEach(age=>{if(age>max){
//         max=age;
// }
// }
    
//   )
//   console.log("maximum age:"+max);
//   ages.forEach(age=>{if (age<min){
//     min=age;
//   }

// })
// console.log("minimum age:"+min)
// let ages=[2,32,23,35,12,78];
// let even=[];
// ages.forEach(age=>{
//     if(age%2==0){
//         even.push(age)
//     }

// })
// console.log(even)
// const names=["sugan","saran","eniya"]
// names.forEach((name,index)=>{

//     names[index]=name.toUpperCase()
// })

// console.log(names)
//map
// const leaves=[49,100,4,1,25,121,100]
// const latest=leaves.map(leave=>{
//     return Math.sqrt(leave)

// })
// console.log(latest)

// const students=[{name:"sam",age:21,salary:12000,city:"trichy"},
// {name:"sam",age:27,salary:12000,city:"trichy"},
// {name:"ram",age:25,salary:17000,city:"trichy"},
// {name:"amrith",age:18,salary:22000,city:"trichy"},
// {name:"karhti",age:21,salary:40000,city:"trichy"},
// {name:"vijay",age:19,salary:23000,city:"trichy"}]
// console.table(students);
//  let eligible_status=students.map(student=>({
//     ...student,
//    status: student.age>18?"eligible":"not eligible"
// }))
// console.log(eligible_status)
// let ages=[2,32,23,35,12,78];
// let double=ages.map(age=>age*2)
// // console.log(double)
// let fruits=["apple","orange"]
// let colors=["red","orange"]
// let combo=fruits.map((fruit,index)=>
//     (fruit+"-"+colors[index])
// )
// console.log(combo)
// let players=["dhoni","virat"];
// let captialWord=players.map(player=>player.toUpperCase())
// console.log(captialWord);
//update array
// const students=[{name:"sam",age:21,salary:12000,city:"trichy"},
// {name:"sam",age:27,salary:12000,city:"trichy"},
//  {name:"ram",age:25,salary:17000,city:"trichy"}]
//  const updatedstudents=students.map(student=>{
//     return{
//         ...student,
//         age:student.age+1,
//     }


//  })
//  console.log(updatedstudents)
//---------------------------------------filters-------------------------------------
// let words=["elephant","lion","tiger","cow","rat","eagle"]
// let shortwords=words.filter(word=>word.length<4)
// let longwords =words.filter(word=>word.length>5)
// let startword=words.filter(word=>word.startsWith("e"))
// console.log(longwords)
// console.log(shortwords)
// console.log(startword)
// const students=[{name:"sam",age:31,salary:12000,city:"trichy"},
//  {name:"sam",age:27,salary:12000,city:"trichy"},
//  {name:"ram",age:25,salary:25000,city:"madurai"},
//  {name:"amrith",age:18,salary:22000,city:"chennai"}]
//  let eligiblestudents=students.filter(student=>student.age>20&&student.salary>=20000)
// console.log(eligiblestudents)
// let marks=[34,88,66,22,44]  
// let evaluvation=marks.every(mark=>mark%2==0)
// console.log(evaluvation);
// let marks1=[34,88,63,22,44]  
// let evaluvation1=marks1.every(mark1=>mark1%2==0)
// console.log(evaluvation1);
// let marks=[34,88,66,22,44]  
// let evaluvation=marks.some(mark=>mark%2==0)
// console.log(evaluvation);
// let marks1=[34,88,63,22,44]  
// let evaluvation1=marks1.some(mark1=>mark1%2==0)
// console.log(evaluvation1);
//--------------------------- multiple way to clone array methods-----------------------
// let hero=["ajith","vijay","vikra","dhanush"];
// let clonedhero=[...hero]
// console.log(hero)
// console.log("spreadoperator",clonedhero)
// let hero=["ajith","vijay","vikra","dhanush"];
// let clonedhero=hero.slice();
// console.log(hero)
// console.log("slice method",clonedhero)
// let hero=["ajith","vijay","vikra","dhanush"];
// let clonedhero=[].concat(hero)
// console.log(hero)
// console.log("concat method",clonedhero)
// let hero=["ajith","vijay","vikra","dhanush"];
// let clonedhero=Array.from(hero)
// console.log(hero)
// console.log("Array.from",clonedhero)
// let hero=["ajith","vijay","vikra","dhanush"];
// let clonedhero=JSON.parse(JSON.stringify(hero))
// console.log(hero)
// console.log("JSON METHOD",clonedhero)






