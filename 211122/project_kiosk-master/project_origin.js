let orders = [];
const menus_coffee = [
    { name: "Espresso", price: 2900, picture: "menu/c1.jpg" },
    { name: "Espresso Con Panna", price: 3200, picture: "menu/c2.jpg" },
    { name: "(Ice) Caffe Americano", price: 3200, picture: "menu/c3.jpg" },
    { name: "(Hot) Caffe Americano", price: 3200, picture: "menu/c4.jpg" },
    { name: "(Ice) Caffe Latte", price: 3200, picture: "menu/c5.jpg" },
    { name: "(Hot) Caffe Latte", price: 3200, picture: "menu/c6.jpg" },
    { name: "(Ice) Cappuccino", price: 3700, picture: "menu/c7.jpg" },
    { name: "(Hot) Cappuccino", price: 3700, picture: "menu/c8.jpg" },
    { name: "(Ice) Caffe Mocha", price: 3900, picture: "menu/c9.jpg" },
    { name: "(Hot) Caffe Mocha", price: 3900, picture: "menu/c10.jpg" },
    { name: "(Ice) Caramel Macchiato", price: 3900, picture: "menu/c11.jpg" },
    { name: "(Hot) Caramel Macchiato", price: 3900, picture: "menu/c12.jpg" },
];
const menus_flatccino = [
    { name: "Plain Yogurt Flatccino", price: 4200, picture: "menu/f1.jpg" },
    { name: "Blueberry Yogurt Flatccino", price: 4200, picture: "menu/f2.jpg" },
    { name: "Strawberry Yogurt Flatccino", price: 4200, picture: "menu/f3.jpg" },
    { name: "Mango Flatccino", price: 3500, picture: "menu/f4.jpg" },
    { name: "Green Tea Flatccino", price: 4200, picture: "menu/f5.jpg" },
    { name: "Grapefruit Flatccino", price: 3800, picture: "menu/f6.jpg" },
];
const menus_dessert = [
    { name: "Souffle Cheese Cake", price: 3900, picture: "menu/d1.jpg" },
    { name: "Devil's Choco Cake", price: 3900, picture: "menu/d2.jpg" },
    { name: "Choco Tiramisu", price: 3900, picture: "menu/d3.jpg" },
    { name: "Honey Caramel Bread", price: 4600, picture: "menu/d4.jpg" },
    { name: "Maple Nut Bread", price: 4800, picture: "menu/d5.jpg" },
    { name: "Croissant", price: 2300, picture: "menu/d6.jpg" },
];

const menuList = document.querySelector(".coffee"); // menuList 변수에 class가 .menuList인 태그 주소를 넣는다.
let str = ""; //값을 유지하기 위해 전역변수 선언
for (let i = 0; i < menus_coffee.length; i++) {
    const menu = menus_coffee[i];
    str += `  <div class="col">
                <div coffee-idx="${i}">
                  <img src = "${menu.picture}">
                  <button class="btn btn-sm btn-danger mt-1">취소</button>
                  <div class="card-body">
                    <div>${menu.name}</div>
                    <div>${menu.price}</div>
                    
                  </div>
                </div>
              </div>`;
}
menuList.innerHTML = str;

menuList.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        //console.log(e)
        const target = e.target;

        const divEle = target.closest("div");
        const idx = divEle.getAttribute("coffee-idx");
        const menu = menus_coffee[idx];
        const nodeName = target.nodeName;

        if (nodeName === "IMG") bill(menu, 1);
        else if (nodeName === "BUTTON") bill(menu, -1);

        //   console.log("button pressed")
        // showOrderItems()
    },
    false
);

const menuList2 = document.querySelector(".flatccino"); // menuList 변수에 class가 .menuList인 태그 주소를 넣는다.
let str2 = ""; //값을 유지하기 위해 전역변수 선언
for (let i = 0; i < menus_flatccino.length; i++) {
    const menu = menus_flatccino[i];
    str2 += `  <div class="col">
                <div flatccino-idx="${i}">
                  <img src = "${menu.picture}">
                  <button class="btn btn-sm btn-danger mt-1">취소</button>
                  <div class="card-body">
                    <div>${menu.name}</div>
                    <div>${menu.price}</div>
                  </div>
                </div>
              </div>`;
}
menuList2.innerHTML = str2;

menuList2.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        e.stopPropagation();

        const target = e.target;
        const divEle = target.closest("div");
        const idx = divEle.getAttribute("flatccino-idx");
        const menu = menus_flatccino[idx];
        const nodeName = target.nodeName;

        if (nodeName === "IMG") bill(menu, 1);
        else if (nodeName === "BUTTON") bill(menu, -1);
        //  showOrderItems()
    },
    false
);

const menuList3 = document.querySelector(".dessert"); // menuList 변수에 class가 .menuList인 태그 주소를 넣는다.
let str3 = ""; //값을 유지하기 위해 전역변수 선언
for (let i = 0; i < menus_flatccino.length; i++) {
    const menu = menus_dessert[i];
    str3 += `<div class="col">
                <div dessert-idx="${i}">
                  <img src = "${menu.picture}">
                  <button class="btn btn-sm btn-danger mt-1">취소</button>
                  <div class="card-body">
                    <div>${menu.name}</div>
                    <div>${menu.price}</div>
                  </div>
                </div>
              </div>`;
}

menuList3.innerHTML = str3;
menuList3.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        e.stopPropagation();

        const target = e.target;
        const divEle = target.closest("div");
        const idx = divEle.getAttribute("dessert-idx");
        const menu = menus_dessert[idx];
        const nodeName = target.nodeName;
        if (nodeName === "IMG") bill(menu, 1);
        else if (nodeName === "BUTTON") bill(menu, -1);
        //   showOrderItems()
    },
    false
);

const orderRequest = document.querySelector("#orderRequest");
orderRequest.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        e.stopPropagation();
        reset();
    },
    false
);

function bill(menu, adder) {
    // 이 경우만 남긴 후 result에 저장
    const result = orders.filter((oi) => oi.name === menu.name);

    console.log("-------check result-----------");
    console.log(result);
    // result는 리모콘이므로 result[0]은 곧 중복값이 있던 orders[아무개]가 됨
    if (result.length > 0) {
        if (adder) result[0].qty += adder;
        if (result[0].qty < 0) result[0].qty = 0;
    } else {
        if (adder > 0) orders.push({ ...menu, qty: 1 });
    }

    console.log(orders);
    showOrderItems();
}

function showOrderItems() {
    const orderListEle = document.querySelector(".orderlist");
    let str = "";
    let sum = 0;
    str += `<ol class="list-group list-group-numbered">`;
    for (let i = 0; i < orders.length; i++) {
        const orderItem = orders[i];

        str += `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${orderItem.name}</div>
      ${orderItem.price}
    </div>
    <span class="badge bg-primary rounded-pill">${orderItem.qty}</span>
  </li>`;
        sum += orderItem.price * orderItem.qty;
    }
    str += `</ol>`;
    str += `<ul class="list-group list-group-flush" style="float:right">
  <li class="list-group-item">총계 : ${sum}</li>`;
    orderListEle.innerHTML = str;
}

// function reset() {
//     const orderListEle = document.querySelector(".orderlist");
//     orderListEle.innerHTML = "";
//     orders = [];
// }