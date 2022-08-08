//ALERT, PROMPT, CONFİRM

let ad = prompt('Adın nedir', 'Lütfen adınızı giriniz...');

let yas=prompt("Yaşınızı giriniz")

let cinsiyet=prompt("Cinsiyetinizi giriniz")
alert(`Adı: ${ad},  Yaşı: ${yas}, Cinsiyeti ${cinsiyet} \'dır.`)

let sonuc =confirm("Öğrenci misin?")   //Tamam dersen True  İptal dersen false döndürür.
alert(sonuc)
