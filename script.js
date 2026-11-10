let cart = [];


// Add products to cart

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to your cart!");
}


// Update shopping cart

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");

    let total = 0;

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML = "Your cart is empty.";

    } else {

        cartItems.innerHTML = "";

        cart.forEach((item, index) => {

            total += item.price;

            cartItems.innerHTML += `
                <div>
                    ${item.name}
                    - R${item.price}

                    <button
                    onclick="removeItem(${index})">
                    Remove
                    </button>
                </div>
            `;

        });

    }

    cartTotal.textContent = total;

}


// Remove product

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// Show cart

function showCart() {

    document.getElementById("cart")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// WhatsApp checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    let message =
        "Hello SLUMMADEART! I want to place an order:\n\n";

    let total = 0;

    cart.forEach(item => {

        message += item.name +
            " - R" + item.price + "\n";

        total += item.price;

    });

    message += "\nTotal: R" + total;

    message +=
        "\n\nPlease tell me how to complete my order.";

    // Replace with your business WhatsApp number.
    // Use international format without + or spaces.

    const phone = "27674013422";

    const url =
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}