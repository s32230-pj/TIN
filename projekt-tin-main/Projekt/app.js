/*const wrapper = document.querySelector(".sliderWrapper");
console.log(wrapper);
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw`;
        console.log("kliknales" + index);
    });
});*/
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Audi Q7 Body Kit",
    price: 4800,
    desc: "Body kit do Audi Q7 to propozycja dla tych, którzy chcą nadać swojemu SUV-owi luksusowy i unikalny charakter. Zestaw zawiera zderzaki, osłony oraz dodatkowe elementy stylizacyjne, które podkreślają elegancję i sportowy charakter pojazdu. Wykonany z trwałych materiałów, zapewnia doskonałe dopasowanie i odporność na codzienne użytkowanie.",
    colors: [
      {
        code: "black",
        img: "./img/audi1.png",
      },
      {
        code: "white",
        img: "./img/audi1.png",
      },
    ],
  },
  {
    id: 2,
    title: "M-TECH BMW F30",
    price: 2400,
    desc: "Pakiet M-TECH dla BMW F30 to doskonałe połączenie sportowej stylistyki i wyrafinowanej elegancji. Zawiera charakterystyczne zderzaki, progi boczne oraz elementy aerodynamiczne, które nadają samochodowi dynamiczny wygląd. Idealny wybór dla tych, którzy chcą wyróżnić swoje BMW F30 na drodze i podkreślić jego sportowe korzenie.",
    colors: [
      {
        code: "gray",
        img: "./img/bmw1.png",
      },
      {
        code: "blue",
        img: "./img/bmw1.png",
      }, 
    ],
  },
  {
    id: 3,
    title: "Mercedes C-205 Body Kit",
    price: 5400,
    desc: "Zestaw body kit do Mercedesa C-205 to sposób na podkreślenie nowoczesnej i sportowej sylwetki tego modelu. Elementy takie jak zderzaki, progi i spojlery dodają charakteru, jednocześnie poprawiając aerodynamikę pojazdu. Wykonany z wysokiej jakości materiałów, zestaw doskonale komponuje się z linią nadwozia i zapewnia trwałość.",
    colors: [
      {
        code: "gray",
        img: "./img/mercedes1.png",
      },
      {
        code: "black",
        img: "./img/mercedes1.png",
      },
    ],
  },
  {
    id: 4,
    title: "Sportowy Zderzak Opel Astra G",
    price: 600,
    desc: 'Sportowy zderzak do Opla Astra G to świetny sposób na odświeżenie wyglądu Twojego auta. Nowoczesny design i precyzyjne wykonanie sprawiają, że zderzak podkreśla dynamiczny charakter samochodu. Łatwy w montażu, wykonany z trwałych materiałów, stanowi idealne rozwiązanie dla osób chcących dodać swojej Astrze sportowego sznytu.',
    colors: [
      {
        code: "gray",
        img: "./img/opel1.png",
      },
      {
        code: "red",
        img: "./img/opel1.png",
      },
    ],
  },
  {
    id: 5,
    title: "Mitsubishi Lancer EVO 10 Body Kit",
    price: 6300,
    desc: "Zestaw body kit do Mitsubishi Lancer EVO 10 to idealne rozwiązanie dla miłośników sportowego designu i poprawy aerodynamiki. W skład zestawu wchodzą elementy, które podkreślają agresywną stylistykę samochodu, takie jak sportowe zderzaki, progi boczne i spojlery. Doskonałe dopasowanie i wysoka jakość wykonania sprawiają, że Twój EVO 10 zyska nowy, dynamiczny wygląd.",
    colors: [
      {
        code: "white",
        img: "./img/mitsubishi1.png",
      },
      {
        code: "darkblue",
        img: "./img/mitsubishi1.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDescription = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
   
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

  
    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price+"zł";
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDescription.textContent = choosenProduct.desc;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const limitowanaoferta = document.querySelector(".limitedOffer");
const sztilon = document.querySelector(".sztilon");
const close = document.querySelector(".close");
const close2 = document.querySelector(".close2");

limitowanaoferta.addEventListener("click", () => {

})


productButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0, 
    behavior: "smooth" 
  });
  payment.style.display = "flex";
});


close.addEventListener("click", () => {
  payment.style.display = "none";
});

close2.addEventListener("click", () => {
  sztilon.style.display = "none";
});

limitowanaoferta.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  sztilon.style.display = "block";
});

setInterval(updateCountdown, 1000);

const startingMinutes = 60;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('odliczanie');

function updateCountdown() {
  const minutes = Math.floor(time/60);
  let seconds = time % 60;

  countDownEl.innerHTML = `${minutes}: ${seconds}`;
  time --;
}