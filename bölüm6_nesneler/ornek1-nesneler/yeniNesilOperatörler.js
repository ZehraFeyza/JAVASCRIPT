//============================================
//      YENİ NESİL OPERATÖRLER
//============================================
// ES6 ile birlikte bir dizi yada  nesnenin içerisindeki elemanları
 //kolaylıkla ayrıştırabilir

 const birey={
     ad:"can",
     konum:"samsun",
     email:"can@gmail.com"
 };

 // * 1.YÖNTEM ==> klasik Yöntem
 const ad1=birey.ad;
 const konum1=birey.konum;
 console.log(ad1,konum1);

// *2. YÖNTEM (OBJECT DESTRUCTRING)Objeyi ayrıştırma yöntemi
//! Destructring  kullanılırken  "Key" isimleri nesneninki ile aynı olmalıdır
// aksi takdirde undefined degerler dönerler

const {ad,konum,email}=birey;
console.log(ad,konum,email);
birey.ad="Mustafa";//birey nesnesindeki ad'ı günceller
console.log(birey);

function bilgial(){
    return{
        id:"101",
        urunAdi:"Apple",
        fiyat:15000,
    };
}
console.log(bilgial());
const {id,urunAdi,fiyat}=bilgial();
console.log(id,urunAdi);


//======================================================
//     YENİ NESİL OPERATÖRLER:DESTRUCTURING(ARRAY)
//======================================================

const  isimler=["Ahmet","Can","Veli"];

//Klasik yöntem
const isim1=isimler[0];
const isim2=isimler[1];

//Destructurıng
const [kisi1,kisi2]=isimler;//Dizilerde key-value yapısı olmadıgı için . İsimler dizisinin içerisi
//sadece deger içeriyor key-value yapısı yok
console.log(kisi1,kisi2);

// ======================================================
//        YENİ NESİL OPERATORLER: SPREAD VEYA REST  ...
// ======================================================

// Spread operatoru dizileri ve nesneleri birleştirmek
// veya ayırımak icin kullanilabilir.
// Kullanmak içini dizinin onune ... karakterleri konulur.

// DİZİLERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
// REST (Dizilede kullanım)
const arabalar = ["bmw", "reno", "mercedes", "ferrari", "anadol"];
const [araba1, araba2, ...geriKalanlar] = arabalar;
console.log(araba1, araba2);
console.log(geriKalanlar);

// NESNELERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.

const personel = {
    isim: "john",
    soyad: "smith",
    meslek: "developer",
  };
  const { meslek, isim, ...geriKalan } = personel;
  console.log(geriKalan);


// DIZILERI BIRLESTIRMEK ICIN DE KULLANILABILIR
const araclar=["ucak","helikopter","Bisiklet"];
const otomobiller=["kamyon","Kamyonet","Otobüs","Araba"];

const yeniDizi=[...araclar, ...otomobiller];
console.log(yeniDizi);

const meyveler=["kiraz","armut","seftali","üzüm"];
const turunclar=["limon","portakal","mandalin", ...meyveler];
console.log(turunclar);