let fetchData = async () => {
    try {
        let res = await fetch("https://dummyjson.com/products");

        if (res.ok) {
            let data = await res.json();
            displayData(data);
        }
    } catch (err) {
        console.log(err);
    }
};

let displayData = (data) => {
    let container = document.getElementById("container");
    if (!container) return; 

    container.innerHTML = "";

    data.products.forEach((ele) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("h3");
        let price = document.createElement("p");
        let btn = document.createElement("button");

        title.innerText = ele.title;
        price.innerText = `Price: ${ele.price}`;
        btn.innerText = "Add to Cart";

        btn.addEventListener("click", () => {
            addtoCart(ele);
        });

        card.append(title, price, btn);
        container.append(card);
    });
};

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

let addtoCart=(product) => {
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

let displayCart=() => {
    let container = document.getElementById("cart_container");

    cartItems.forEach((ele) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("h3");
        let price = document.createElement("p");

        title.innerText = ele.title;
        price.innerText = `Price: ${ele.price}`;

        card.append(title, price); 
        container.append(card);
    });
};

window.onload = () => {
    fetchData();
    displayCart();
};