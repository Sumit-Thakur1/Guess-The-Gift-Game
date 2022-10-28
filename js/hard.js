//Script for level Basic
var counter=0;
var loose=0;
function  diff(different){

if(different==value1|| different==value2|| different==value3){
document.getElementById(different).value="GIFT!!🎁";
document.getElementById(different).style.fontSize="18px";
document.getElementById(different).style.color="black";
document.getElementById(different).style.background="green";
counter++;
}
else if(different==bomb){
document.getElementById(different).value="Bomb💣!!";
document.getElementById(different).style.fontSize="18px";
document.getElementById(different).style.color="black";
document.getElementById(different).style.background="red";

document.getElementById("contiu").innerHTML ="OPPs!!💣 you encountered a Bomb";
setTimeout('window.location.reload()', 2000);

}
else{
    
document.getElementById(different).value="MISS";
document.getElementById(different).style.fontSize="18px";
document.getElementById(different).style.color="yellow";
document.getElementById(different).style.background="black";
loose++;
}
if(counter==3){
    
    document.getElementById("contiu").style.left="22%";
    document.getElementById("contiu").innerHTML="RESULT:CONGRATULATIONS!!🎉 You Took  "+(loose+counter)+" "+" chances";
    setTimeout('window.location.reload()', 5000);
}
}


const rndfunc = function(less, large, avoid) {
    if(!avoid)
     avoid = []
     let rand = (less, large) => Math.floor(Math.random() * (large - less + 1)) + less;
        let retv = 0;
        while(avoid.indexOf(retv = rand(less,large)) > -1) { }
        return retv;
}


const  value1=Math.floor(Math.random() * 36)+1
let value2 = rndfunc(1, 36, [value1]);
let value3=rndfunc(1,36,[value1,value2])
let bomb=rndfunc(1,36,[value1,value2,value3])
console.log(value1);
console.log(value2);
console.log(value3);
console.log(bomb);



function home(){
    window.location.href="index.html";
}