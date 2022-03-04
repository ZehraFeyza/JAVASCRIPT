
document.querySelector(".btn").onclick=function(){
  const renkler=["Red","Blue","Pink","Purple","Green","Yellow"]; 
  const rastgele=Math.floor(Math.random()*renkler.length);
  console.log(rastgele);
  document.querySelector(".renk").innerHTML=renkler[rastgele];
  document.querySelector("body").style.backgroundColor=renkler[rastgele];
  document.querySelector("h1").style.color=renkler[rastgele]; 
};