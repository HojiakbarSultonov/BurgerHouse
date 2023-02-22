"use strtict";

product = {
  plainBurger: {
    name: "GAMBURGER",
    price: 10000,
    amount: 0,
    kkal: 500,
    get Summ() {
      return this.amount * this.price;
    },
    get kkalSum() {
      return this.amount * this.kkal;
    },
  },
  freshBurger: {
    name: "GAMBURGER FRESH ",
    price: 20500,
    amount: 0,
    kkal: 800,
    get Summ() {
      return this.amount * this.price;
    },
    get kkalSum() {
      return this.amount * this.kkal;
    },
  },
  freshCombo: {
    name: "FRESH COMBO ",
    price: 31900,
    amount: 0,
    kkal: 1200,
    get Summ() {
      return this.amount * this.price;
    },
    get kkalSum() {
      return this.amount * this.kkal;
    },
  },
};

const plusOrMinus = document.querySelectorAll(".main__product-btn");
plusOrMinus.forEach((item) => {
  item.addEventListener("click", function () {
    count(this);
  });
});

function count(element) {
  let parent = element.closest(".main__product"),
    parentId = parent.getAttribute("id"),
    num = parent.querySelector(".main__product-num"),
    price = parent.querySelector(".main__product-price span"),
    kkal = parent.querySelector(".main__product-kcall span"),
    attribute = element.getAttribute("data-symbol");

  if (attribute == "+" && product[parentId].amount < 30) {
    product[parentId].amount++;
  } else if (attribute == "-" && product[parentId].amount > 0) {
    product[parentId].amount--;
  }
  num.textContent = product[parentId].amount;
  price.textContent = product[parentId].Summ;
  kkal.textContent = product[parentId].kkalSum;
}

const addCard = document.querySelector(".addCart"),
  receipt = document.querySelector(".receipt"),
  receiptWindow = document.querySelector(".receipt__window"),
  receiptWindowOut = document.querySelector(".receipt__window-out");

addCard.addEventListener("click", () => {
  receipt.style = `display:flex`;
  setTimeout(() => {
    receipt.style.opacity = "1";
    receiptWindow.style.top = "15%";
  }, 500);

  const productList = Object.values(product).filter((number) => number.amount);
  console.log(productList);
  let total = "";
  let totalSumm = 0;
  let totalKkal = 0;
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].amount > 0) {
      total += `  
            ${i + 1}  ${productList[i].name} ${productList[i].amount} * ${
        productList[i].price
      } =  ${productList[i].Summ} Sum `;
      totalSumm += productList[i].Summ;
      totalKkal += productList[i].kkalSumm;
    }
  }
  receiptWindowOut.textContent = total + `Umumiy narx: ${totalSumm} so'm`;
});

const headerTimer = document.querySelector(".header__timer"),
  timeExtra = document.querySelector(".header__timer-extra");

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function color() {
  let r = random(0, 255),
    g = random(0, 255),
    b = random(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function recursion() {
  if (timeExtra.textContent < 80) {
    timeExtra.textContent++;
    headerTimer.style.color = color();
    setTimeout(() => {
      recursion();
    }, 50);
  } else if (timeExtra.textContent < 100) {
    timeExtra.textContent++;
    headerTimer.style.color = color();
    setTimeout(() => {
      recursion();
    }, 100);
  }
}

recursion();

const mainProductInfo = document.querySelectorAll(".main__product-info"),
  view = document.querySelector(".view"),
  viewClose = document.querySelector(".view__close"),
  viewImg = document.querySelector(".view img");

mainProductInfo.forEach((items) => {
  items.addEventListener("dblclick", () => {
    view.classList.add("active");
    let img = items.querySelector(".main__product-img"),
      imgAtt = img.getAttribute("src");
    viewImg.setAttribute("src", imgAtt);
  });
});

viewClose.addEventListener("click", () => {
  view.classList.remove("active");
});

const pay = document.querySelector(".receipt__window-btn");
pay.addEventListener("click", () => {
  document.location.reload();
});
