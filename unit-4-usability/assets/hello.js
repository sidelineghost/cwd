//hello.js


let sus = document.querySelector("#sus");

sus.addEventListener("submit", (event) => {
	event.preventDefault(); 

let n1 = Number(this.n1.value);
let n2 = Number(this.n2.value);
let n3 = Number(this.n3.value);
let n4 = Number(this.n4.value);
let n5 = Number(this.n5.value);
let n6 = Number(this.n6.value);
let n7 = Number(this.n7.value);
let n8 = Number(this.n8.value);
let n9 = Number(this.n9.value);
let n0 = Number(this.n0.value);

n1 = n1-1
n3 = n3-1
n5 = n5-1
n7 = n7-1
n9 = n9-1

n2 = 5-n2
n4 = 5-n4
n6 = 5-n6
n8 = 5-n8
n0 = 5-n0

let ans = (n1+n2+n3+n4+n5+n6+n7+n8+n9+n0)*2.5

});