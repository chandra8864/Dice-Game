function test(){


var RN1=Math.floor(Math.random()*6)+1;
var RD="/img"+RN1+".jpeg";
document.querySelectorAll("img")[0].setAttribute('src',RD)

var RN2=Math.floor(Math.random()*6)+1;
var RD1="/img"+RN2+".jpeg";
document.querySelectorAll("img")[1].setAttribute('src',RD1)

if(RN1>RN2){
    document.querySelector('.mn').innerHTML="Player one win "
}else if(RN2>RN1){
    document.querySelector('.mn').innerHTML="Player two win "
}else{
    document.querySelector('.mn').innerHTML="DRAW"
}

}