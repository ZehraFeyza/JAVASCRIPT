//=======NESNESLER(OBJECTS)======//

//Diziler sıralı bellek bölgeleridir.Dolayısıyla diziye erişim indisleme ile yapılır.
//Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır
//Eger veriler komplex ise o zaman  dizilerde erişim güçlüğü ortaya cıkar



// !OBJECT

// Nesnelerde Key-value(property-value) yapısı kullanılır 
//Nesnelerde aradığımız veriye erişmek için property adını kuklanmak yeterlidir

//NESNE OLUSTURMA YÖNTEMLERİ
//1)object literal yöntemi(Klasik key value kullanılarak olusturulan yöntem)
const insan={
    ad:"Can",
    soyad:"Yılmaz",
    yas:30,
    meslek:"developer",
    diller:["Java","js","c++","sql","Phyton"],
};//Jhon  formatı veri türüdür.
console.log(insan);

//.dot notasyonu ile verilere erişilebilir
//Keyler de buyuk kucuk harf hassasıyetı vardır cunkı keyler String yapıdadır
console.log(insan.ad);

//Köşeli parantez erişimi (köşeli parantez içerisine bir expression yazmak mümkündür.)
console.log(insan["diller"]);
const yazi = "Adim";
console.log(`${yazi} ${insan.ad} ve yasim ${insan["yas"]}`);


const bilgiSecimi=prompt("insan  nesnesi hakkında ne bilmek istersiniz? Seciminizi girinz");

if(insan[bilgiSecimi]){
    console.log(insan[bilgiSecimi]);
}else{
    console.log("yanlıs secım .Lutfen ad,soyad,meslek,diller,yas seklinde giriniz");
}


//=========NESNE METHOTLARI=========//


const kisi={
    ad:"Ahmet",
    soyad:"Can",
    dogumTarihi:1990,
    meslek:"tester",
    tool:"selenium",
    ehliyet:"true",
    yasHesapla:function(){
        console.log(this);// this bize içinde bulundugumuz objeyi çagırdı
       // return 2021 - this.dogumTarihi;  2021 yerine  new Date()==>methodu da kullanılabilirdi, Date()
       // fonksiyonunun alt fonksiyonları da kullanılabilir.
         return new Date().getFullYear()-this.dogumTarihi;
    },
ozet: function(){
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir.Meslegi ${this.meslek} liktir`;
}
}
const tarih= new Date();
console.log(tarih.getTime());
console.log(tarih.getDay());
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//=========NESNE İTERASYON ÖRNEKLERİ=========//
 const kisiler=[
     {
     ad:"mustafa",
     soyad:"can",
     meslek:"developer",
     yas:20,
 },
 { ad:"ali",
 soyad:"dede",
 meslek:"ascı",
 yas:30,
 },
 { ad:"velii",
 soyad:"karsu",
 meslek:"demirustası",
 yas:32,
 },
 { ad:"zehra",
 soyad:"co",
 meslek:"fullstack developer",
 yas:28,
 }
]
//ÖRNEK1: kişiler dizisindeki kişilerin mesleklerini konsola yazdıralım
kisiler.forEach((x)=>console.log(x.meslek));


//ÖRNEK2 :kisiler dizindeki  tüm bireylerin yaşını bir arttırarak yazınız
const yaslar=kisiler.map((x)=>x.yas+1)//Buradaki x kişiler objesının 
// içeriisndeki her bir nesneyi(key-value yapısında ) temsil ediyor
// ,x.yas => ise bu objenın ıcerısındekı yas degıskenıne ulasmıs oluyor
console.log(yaslar);


//ÖRNEK3 :kişiler dizisindeki kişilerin  isimlerini büyükHarf olarak  alan 
//yasşlarını da 5 arttırarak  yeni bir nesne olusturan  kodu yazınız
const buyukHarf=kisiler.map((x)=>{  //süslü kullandık cünki birdeen fazla işlem yaptıracagız
return {
 ad:x.ad.toUpperCase(),// nesne içerisindeki her bir elemen virgül ile ayrılır 
yas:x.yas+5,// yenı bir nesne döndurmek için yeni nesnenın de key-value yapısında olması gerekir
soyad:x.soyad,
}})//degisim istediğinde map kullanmak daha mantıklıdır
  console.log(buyukHarf);


//ÖRNEK4: Yasşı 25 eşit veya küçük olanların adlarını yazdıran kodu yazınız
kisiler.filter((x)=>x.yas<=25).forEach((a)=>console.log(a.ad));




// ÖRNEK5:Meslegi developer olanların isim ve yaşlarını  bir diziye kaydedınız
const developer=kisiler.filter((x)=>x.meslek=="developer").map((x)=>{
    return{
        ad:x.ad,
        yas:x.yas,
    };
});
console.log(developer);



//ÖRNEK6: Kişilerin ortalama yaşını hesaplayınız 
const ortalamayas=kisiler.reduce((toplam,kisi)=>toplam+kisi.yas,0)/kisiler.length;
//kisiler.reduce((toplam,kisi)=>toplam+kisi.yas,0) bu kod blogu toplama işlemini yapar 
console.log(ortalamayas);