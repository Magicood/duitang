/**
 * Created by Magic on 2016/12/5.
 */
/*
* javascript基本数据类型练习
* 
*/
var varString="abc" ;                  //string
var varNumber=123;                     //number
var varUndefined=undefined;            //underfined
var varBoolean=false;                  //boolean
var varNull=null;                       //null
/*
*JavaScript 变量类型检查
* */
var varTypeStr = typeof "abc";
document.writeln(varTypeStr);



var varTypeNum = typeof 123;
document.writeln(varTypeNum);



var varTypeBool = typeof false;
document.writeln(varTypeBool);



var varTypeUnd = typeof undefined;
document.writeln(varTypeUnd);



var varTypeNull = typeof null;
document.writeln(varTypeNull);
document.write("<br>");
/**
 *类型练习
 * @type {number}
 */
var varNumber2 =8;
varNumber2=varNumber2+12;
document.write(varNumber2);

var max=1/0;
document.write("<br>");
document.write(max);

// var infl = infinity;

/**
 *
 * @type {string}
 */
var hello="hello world!";
var l=hello.length;
document.write("<br>");
document.write(l);
document.write("<br>");
document.write(hello[0]);
document.write(hello[1]);
document.write(hello[2]);
document.write("...");
document.write(hello[hello.length-1]);

var helloPre=hello.substring(0,5);
document.write("<br>");
document.writeln(helloPre);

var helloPre=hello.substr(0,5);
document.writeln(helloPre);
document.write("<br>");
/**
 * boolean练习
 * @type {boolean}
 */
var flag=true;
if(flag){
    document.write("flag = ture");
}else{
    document.write("flag = false");
}
/**
 * 类型转换string
 * @type {string}
 */
var strNumberConvert = String(123);
document.write("<br>");
document.write(typeof strNumberConvert);

var dateStr = String(new Date());
document.write("<br>");
document.write(dateStr);
/**
 * 类型转换number
 * @type {string}
 */
var nVar = String("1234");
document.write("<br>");
document.write(nVar);

var bNumber = String(false);
document.write("<br>");
document.write(bNumber);

var nNumber = String(null);
document.write("<br>");
document.write(nNumber);

var unNumber = String(undefined);
document.write("<br>");
document.write(unNumber);

/**
 *
 * @type {number}
 */
var y=5;
var x="2";
x=x+y;
document.write("<br>");
document.write(x);

/**
 * object对象类型
 */
var person = {
    name:"Bob",
    age:20,
    tag:['js','web','mobile'],
    city:"Beijing",
    hasCar:true,
    zipcode:null
};
document.write('<br>');
document.writeln(person.name);
document.writeln(person.age);
document.writeln(person.tag);
document.writeln(person.city);
document.writeln(person.hasCar);
document.writeln(person.zipcode);