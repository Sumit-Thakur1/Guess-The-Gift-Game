//Script for level medium
var counter=0;
var loose=0;
function  other(item){

if(item==value1|| item==value2|| item==value3){
document.getElementById(item).value="GIFT!!🎁";
document.getElementById(item).style.fontSize="18px";
document.getElementById(item).style.color="black";
document.getElementById(item).style.background="green";
counter++;
}
else if(item==bomb){
document.getElementById(item).value="Bomb💣!!";
document.getElementById(item).style.fontSize="18px";
document.getElementById(item).style.color="black";
document.getElementById(item).style.background="red";

document.getElementById("conti").innerHTML ="OPPs!!💣 you encountered a Bomb";
setTimeout('window.location.reload()', 2000);

}
else{
    
document.getElementById(item).value="MISS";
document.getElementById(item).style.fontSize="18px";
document.getElementById(item).style.color="yellow";
document.getElementById(item).style.background="black";
loose++;
}
if(counter==3){
    
    document.getElementById("conti").style.left="22%";
    document.getElementById("conti").innerHTML="RESULT:CONGRATULATIONS!!🎉 You Took  "+(loose+counter)+" chances";
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


const  value1=Math.floor(Math.random() * 16)+1
let value2 = rndfunc(1, 16, [value1]);
let value3=rndfunc(1,16,[value1,value2])
let bomb=rndfunc(1,16,[value1,value2,value3])
console.log(value1);
console.log(value2);
console.log(value3);
console.log(bomb);


function home(){
    window.location.href="index.html";
}