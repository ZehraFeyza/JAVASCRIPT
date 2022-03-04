const dogum=1980;
const yaslar=[30,25,44,77];

const isimler=["ahmet","mustafa","can","bekir","ayse",20,40,true,23.4,2021-dogum,yaslar];
console.log(isimler);

//dizi erişimi için
console.log(isimler[0]);
console.log((isimler[3]="canan"));
console.log(isimler);
isimler[isimler.length-2]=false;
console.log(isimler);

//isimler  dizisinin 10. elemanının 0. elemanı yazdırır
console.log(isimler[10][0]);


// ======== Dızıyı Degıstıren Methodlar ==========

const h1=document.getElementById("meyveler");
let meyveler =["elma", "armut","muz","kivi",30];// default verı tıpleri js de string dir
// pop() son elemanı sıler ve silinen elammı döndürür
// push()  dizinin sonuna eleman ekler
// dizinin son eleman sayısını döndürür
const boyut=meyveler.push("cilek","karpuz");
console.log(boyut);

//unshift dizinin 0. indexine eleman ekler ve dizinin son eleman sayısını döndürür
const boyut1=meyveler.unshift("ayva");
console.log();

//unshift dizinin 0. indeks elemanını  siler  ve silinen elemanı döndürür.
const silinen=meyveler.shift();
console.log(silinen);

//Dizinin tamamını terse çevirir.
meyveler.reverse();

//sona Kavun ekle
meyveler.push("Kavun");

//Diziyi alfabetik olarak sıralar
meyveler.sort();


//Dizinin indexi 1 (baslangıc noktasını)ile 2 arasına yeni  eleman ekler
meyveler.splice(1,0,"Erik");

// Dizinin 4. indeksındekı elemanı sıler yerıne  Mango yazar
meyveler.splice(4,1,"Mango");
console.log(meyveler);
h1.innerHTML=meyveler;

// ======== Dızı  Erişim  Methodları ==========
const sayilar=[3,5,2,"2","üc",2,"bes,5"]
meyveler.includes("Mango")