const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//nav
const headerNav = document.querySelectorAll('a');
headerNav[0].textContent= siteContent.nav['nav-item-1'];
headerNav[1].textContent=siteContent.nav['nav-item-2'];
headerNav[2].textContent=siteContent.nav['nav-item-3'];
headerNav[3].textContent=siteContent.nav['nav-item-4'];
headerNav[4].textContent=siteContent.nav['nav-item-5'];
headerNav[5].textContent=siteContent.nav['nav-item-6'];

//title and button
const title = document.querySelector('h1');
title.textContent ='DOM is Awesome';

const button= document.querySelector('button');
button.textContent='Get Started';

//all h4 content
const allH4 = document.querySelectorAll('h4')
allH4[0].textContent=siteContent['main-content']['features-h4'];
allH4[1].textContent=siteContent['main-content']['about-h4'];
allH4[2].textContent=siteContent['main-content']['services-h4'];
allH4[3].textContent=siteContent['main-content']['product-h4'];
allH4[4].textContent=siteContent['main-content']['vision-h4'];
allH4[5].textContent=siteContent['contact']['contact-h4'];

const allPara = document.querySelectorAll('p')
allPara[0].textContent=siteContent['main-content']['features-content'];
allPara[1].textContent=siteContent['main-content']['about-content'];
allPara[2].textContent=siteContent['main-content']['services-content'];
allPara[3].textContent=siteContent['main-content']['product-content'];
allPara[4].textContent=siteContent['main-content']['vision-content'];
allPara[5].textContent=siteContent['contact']['address'];
allPara[6].textContent=siteContent['contact']['phone'];
allPara[7].textContent=siteContent['contact']['email'];


