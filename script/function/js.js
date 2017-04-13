//bai1
function bai1(x) {
	return x*x;
}
// document.write("<h1> Bài Tập 1</h1>");
// console.log(bai1(4));

//bai2
function bai2(a, b, c) {
	x=3*a+2*b-c;
	return bai1(x);
}
// document.write("<h1> Bài Tập 2</h1>");
//console.log(bai2(3,5,7));

//bai3
function bai3(chuoi) {
	return chuoi.slice(0,10)  + "...";
}
// document.write("<h1> Bài Tập 3</h1>");
//console.log(bai3('wrfser123fasdf1ads41adf32lisdhagsoihfdg[ahgsohdgoshdlgihdslgqtu0ewrjndsbs,mbv.ag5443532636'));

//bai 4
function bai4(chuoi){
	return chuoi.charAt(0).toUpperCase() + chuoi.slice(1);
}
// document.write("<h1> Bài Tập 4</h1>");
//console.log(bai4('nguyen manh do'));

//bai5
function bai5(x){
	x = Math.min(...x);
	return x;
}
// document.write("<h1> Bài Tập 5</h1>");
// console.log(bai5([1.1,3,4,5,8,23,52,73,34,22]));


//bai6
function bai6(x){
	x.sort();
	return x;
}
// document.write("<h1> Bài Tập 6</h1>");
// console.log(bai6(["do", "doan", "hong", "toan", "an" ,"thinh", "cong", "kien", "Aab"]));

//bai 7
var teacher = {
	firstName:" Kim ",
	lastName:"Tan",
	age: 99,
	say: function(){}
}
var student = {
	firstName:" Hoang ",
	lastName:"San ",
	age: 99,
	say: function(){}
}
var parent = {
	firstName: " Kim ",
	lastName: " Song Chun ",
	age: 100,
	say: function(){}
}
 var aboutMe = function() {
	document.write("Xin chào tôi là:" + this.firstName + this.lastName + " năm nay tôi " + this.age + " tuổi");
}
teacher.say = aboutMe;
// teacher.say();
student.say = aboutMe;
// student.say();
parent.say = aboutMe;
parent.say();

