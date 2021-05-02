let mobileQuantity = 10;
let tvQuantity = 6;
let laptopQuantity = 8;
let headsetQuanity = 5;

let mobileQCart = 0, tvQCart = 0, laptopQCart = 0, headsetQCart = 0;
let mobilePCart = 15999, tvPCart = 20000, laptopPCart = 50000, headsetPCart = 1500;
let mobileTCart = 0, tvTCart = 0, laptopTCart = 0, headsetTCart = 0;
let totalCost = 0, totalQuantity = 0;

document.querySelector(".quantity-mobile").textContent = mobileQuantity;
document.querySelector(".quantity-tv").textContent = tvQuantity;
document.querySelector(".quantity-laptop").textContent = laptopQuantity;
document.querySelector(".quantity-headset").textContent = headsetQuanity;

let quantityHolder = document.querySelector("#quantityId");
let priceHolder = document.querySelector("#priceId");

let addCartItemToCart = document.querySelector('#shopping-cart');

let mobileAddButton = document.querySelector(".mobile-btn");
let tvAddButton = document.querySelector(".tv-btn");
let laptopAddButton = document.querySelector(".laptop-btn");
let headsetAddButton = document.querySelector(".headset-btn");


mobileAddButton.addEventListener("click", () => {
    let ui = new UI();

    let cartItem = new Cart("Mobile", mobileQCart, mobileTCart);
    totalQuantity++;
    totalCost += 15999;
    priceHolder.innerHTML = `<p> Price - ${totalCost} BDT</p>`;
    quantityHolder.innerHTML = `<p> Quantity - ${totalQuantity} </p>`;

    ui.addToCart(cartItem);
})

tvAddButton.addEventListener("click", () => {
    let ui = new UI();

    let cartItem = new Cart("Television", mobileQCart, mobileTCart);
    totalQuantity++;
    totalCost += 20000;
    priceHolder.innerHTML = `<p> Price - ${totalCost} BDT</p>`;
    quantityHolder.innerHTML = `<p> Quantity - ${totalQuantity} </p>`;
    ui.addToCart(cartItem);
})

laptopAddButton.addEventListener("click", () => {
    let ui = new UI();

    let cartItem = new Cart("Laptop", mobileQCart, mobileTCart);
    totalQuantity++;
    totalCost += 50000;
    priceHolder.innerHTML = `<p> Price - ${totalCost} BDT</p>`;
    quantityHolder.innerHTML = `<p> Quantity - ${totalQuantity}  </p>`;
    ui.addToCart(cartItem);
})

headsetAddButton.addEventListener("click", () => {
    let ui = new UI();

    let cartItem = new Cart("Headset", mobileQCart, mobileTCart);
    totalQuantity++;
    totalCost += 1500;
    priceHolder.innerHTML = `<p> Price - ${totalCost} BDT</p>`;
    quantityHolder.innerHTML = `<p> Quantity - ${totalQuantity} </p>`;
    ui.addToCart(cartItem);
})


// Cart class
class Cart {
    constructor(productName, quantity, totalPrice) {
        this.productName = productName;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}


// Cart UI

class UI {

    addToCart(cartItem) {
        console.log(cartItem);
        let div = document.createElement("div");
        div.className = "cart-item";
        let head = document.createElement('h3');
        head.appendChild(document.createTextNode(cartItem.productName));
        div.appendChild(head);

        // function remove() {
        //     alert("from remove")
        // }

        let cartBtn = document.createElement('button');
        //cartBtn.setAttribute("onclick", remove);
        cartBtn.onclick = function (e) {
            e.target.parentElement.remove();
            console.log();

            if (e.target.previousSibling.textContent === "Mobile") {
                totalQuantity--;
                quantityHolder.innerHTML = `<p> Quantity - ${totalQuantity} </p>`;
                totalCost -= 15999;
                priceHolder.innerHTML = `<p> Price - ${totalCost} </p>`;

            } else if (e.target.previousSibling.textContent === "Laptop") {
                totalQuantity--;
                quantityHolder.innerHTML = `<p> Quantity - ${totalQuantity} </p>`;
                totalCost -= 50000;
                priceHolder.innerHTML = `<p> Price - ${totalCost} </p>`;

            }
            else if (e.target.previousSibling.textContent === "Television") {
                totalQuantity--;
                quantityHolder.innerHTML = `<p> Quantity - ${totalQuantity} </p>`;
                totalCost -= 20000;
                priceHolder.innerHTML = `<p> Price - ${totalCost} </p>`;
            } else {
                totalQuantity--;
                quantityHolder.innerHTML = `<p> Quantity - ${totalQuantity} </p>`;
                totalCost -= 1500;
                priceHolder.innerHTML = `<p> Price - ${totalCost} </p>`;
            }
        };

        cartBtn.appendChild(document.createTextNode("Remove"));

        div.appendChild(cartBtn);

        //console.log(div);


        addCartItemToCart.appendChild(div);
        // if (cartItem.productName === "Mobile") {
        //     mobileQCart++;
        //     mobileTCart = mobilePCart * mobileQCart;
        // }

        // let quantity = document.createElement('p');
        // quantity.innerText = mobileQCart;
    }


}




