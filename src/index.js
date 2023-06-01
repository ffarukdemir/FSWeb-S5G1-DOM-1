const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!');


/* Kodlar Buradan aşağıya */

const aLinks = document.querySelectorAll("header nav a");

aLinks.forEach((aitem, index) => {
  aitem.className = "italic";
  //aitem.classList.add("italic");
  //aitem.setAttribute("class", "italic");
  aitem.textContent = siteContent.nav[`nav-item-${index + 1}`];
});


document.getElementById("logo-img").src = siteContent.images["logo-img"];

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;

document.getElementsByTagName("button")[0].textContent=siteContent.cta.button;

document.querySelector("#cta-img").setAttribute("src", siteContent.images["cta-img"]);

const textcontenth4=document.querySelectorAll(".text-content h4");
const textcontentp=document.querySelectorAll(".text-content p");

textcontenth4[0].textContent=siteContent["ana-içerik"]["özellikler-h4"];

textcontentp[0].textContent=siteContent["ana-içerik"]["özellikler-içerik"];

textcontenth4[1].textContent=siteContent["ana-içerik"]["hakkımızda-h4"];

textcontentp[1].textContent=siteContent["ana-içerik"]["hakkımızda-içerik"];


textcontenth4[2].textContent=siteContent["ana-içerik"]["servisler-h4"];

textcontentp[2].textContent=siteContent["ana-içerik"]["servisler-içeriği"];

textcontenth4[3].textContent=siteContent["ana-içerik"]["ürünler-h4"];

textcontentp[3].textContent=siteContent["ana-içerik"]["ürünler-içeriği"];


textcontenth4[4].textContent=siteContent["ana-içerik"]["vizyon-h4"];

textcontentp[4].textContent=siteContent["ana-içerik"]["vizyon-içeriği"];


document.querySelector("#middle-img").setAttribute("src", siteContent.images["accent-img"]);

document.querySelector(".contact h4").textContent =siteContent.iletisim["iletişim-h4"];

const contacp=document.querySelectorAll(".contact p");


contacp[0].textContent=siteContent.iletisim.adres;

contacp[1].textContent=siteContent.iletisim.telefon;


contacp[2].textContent=siteContent.iletisim.email;

const footera=document.querySelector("footer a");

footera.textContent=siteContent.footer.copyright;

footera.setAttribute("class", "bold");