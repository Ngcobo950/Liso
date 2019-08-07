//creating the variables that will keep hold of info button,myprice.
let addToCartButtons = document.getElementsByClassName('buttn');
let myPrice = sessionStorage.getItem("design");
let cartPrice = document.getElementById("cartPriceOutput");
let whatsInCart = document.getElementById("cartOutput");


//creating add to cart function ,loop through all of the Add to Cart buttons , will also loop through
let design = []
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        design.push(parseFloat(buttonClicked.id));
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        alert("Your current total is R" + design.reduce(reducer));
        sessionStorage.setItem("design", design.reduce(reducer));

    })
}
//creating object that will keep price and vat
clothingPrices = {

    clothes1: "V-neck R380.00 (R57.00 VAT)",

    clothes2: "Africa R250.00 (R37.50 VAT)",

    clothes3: "Kapi R400.00 (R60.00 VAT)",

    clothes4: "Formal R600.00 (R90.00 VAT)",

    clothes5: "Fiasco R560.00 (R84.00 VAT)",

    clothes6: "Nice R530.00 (R79.50 VAT)"


}

/*Each product has it's details set as per the above Can's Prices object as well as it's own sessionStorage 
            variable to allow it to be added to the cart and remembered between page loads*/

function Cart1() {

    let vneck = clothingPrices.clothes1;
    sessionStorage.setItem("vneck", vneck);

}

function Cart2() {

    let African = clothingPrices.clothes2;
    sessionStorage.setItem("African", African);
}

function Cart3() {

    let kapi = clothingPrices.clothes3;
    sessionStorage.setItem("kapi", kapi);
}

function Cart4() {

    let formal = clothingPrices.clothes4;
    sessionStorage.setItem("formal", formal);
}

function Cart5() {

    let fiasco = clothingPrices.clothes5;
    sessionStorage.setItem("fiasco", fiasco);
}

function Cart6() {

    let nice = clothingPrices.clothes6;
    sessionStorage.setItem("nice", nice);
}

//creating the functionthat will have sessionStorage to keep each info that we get from the catalogue into cart
function getCart() {
    if (sessionStorage.getItem("vneck") != null) {
        let cartItem1 = document.createElement("p");
        whatsInCart.appendChild(cartItem1);
        cartItem1.innerHTML = sessionStorage.getItem("vneck");
        ItemStyler();
    }

    if (sessionStorage.getItem("African") != null) {
        let cartItem2 = document.createElement("p");
        whatsInCart.appendChild(cartItem2);
        cartItem2.innerHTML = sessionStorage.getItem("African");
        ItemStyler();
    }

    if (sessionStorage.getItem("kapi") != null) {
        let cartItem3 = document.createElement("p");
        whatsInCart.appendChild(cartItem3);
        cartItem3.innerHTML = sessionStorage.getItem("kapi");
        ItemStyler();
    }

    if (sessionStorage.getItem("formal") != null) {
        let cartItem4 = document.createElement("p");
        whatsInCart.appendChild(cartItem4);
        cartItem4.innerHTML = sessionStorage.getItem("formal");
        ItemStyler();
    }

    if (sessionStorage.getItem("fiasco") != null) {
        let cartItem5 = document.createElement("p");
        whatsInCart.appendChild(cartItem5);
        cartItem5.innerHTML = sessionStorage.getItem("fiasco");
        ItemStyler();
    }

    if (sessionStorage.getItem("nice") != null) {
        let cartItem6 = document.createElement("p");
        whatsInCart.appendChild(cartItem6);
        cartItem6.innerHTML = sessionStorage.getItem("nice");
        ItemStyler();
    }

    if (sessionStorage.getItem("design") != null) {
        let choicesTotal = document.createElement("p");
        cartPrice.appendChild(choicesTotal);
        choicesTotal.innerHTML = "Total: R" + myPrice;
        PriceStyler();

    } else { //Should the cart be empty, display the following message in a pragraph that is appended to the selected ID
        let empty = document.createElement("p");
        empty.innerHTML = "Your Cart is currently empty";
        whatsInCart.appendChild(empty);
        ItemStyler();
        $("#orderOptions").hide();
        $(".firstBigHeading").hide();
    }

}

//variables which are going to do the math for either the delivery or collection on the sessionStorage variable:
let collectSum = parseFloat(sessionStorage.getItem("design")) + 25.00;
let deliverSum = parseFloat(sessionStorage.getItem("design")) + 200.00;

//as soon as the collect radio button is clicked, the rest of the collect form is shown and the price is ammended and styled
function showCollectForm() {

    document.getElementById("collectChoice").style.display = "inline";
    cartPrice.innerHTML = "Total: R" + collectSum + " (R25.00 charge for collection has been added)";
    PriceStyler();
}

//as soon as the delivery radio button is clicked, the rest of the delivery form is shown and the price is ammended and styled
function showDeliverForm() {

    document.getElementById("deliverChoice").style.display = "inline";
    cartPrice.innerHTML = "Total: R" + deliverSum + " (R200.00 charge for delivery has been added)";
    PriceStyler();
}


//Discount applied against the coupon (15%) and update the Total Price Output
$('#submit').click(function(){
    let input = $('#coupon').val();
    if (input === "thisisthe10%" && document.getElementById("collect").checked) {
        alert("Correct Coupn code! Your 15% discount will be applied");
        let discountSum = (collectSum - 0.15 * collectSum);
        let discountTotal = discountSum.toFixed(2);
        cartPrice.innerHTML = "Discounted Total: R" + discountTotal;
        PriceStyler();
    };

    //creating if statements will will alert delivery and collection and also the discount
    if (input === "thisisthe10%" && document.getElementById("deliver").checked) {
        alert("Correct Coupon code! Your 15% discount will be applied");
        let discountSum = (deliverSum - 0.15 * deliverSum);
        let discountTotal = discountSum.toFixed(2);
        cartPrice.innerHTML = "Discounted Total: R" + discountTotal;
        PriceStyler();
    }

    if (input !== "thisisthe10%" && document.getElementById("collect").checked) {
        alert("Incorrect Coupon Code. Please try again.");
    }
    if (input !== "thisisthe10%" && document.getElementById("deliver").checked) {
        alert("Incorrect Coupon Code. Please try again.");
    }
});

//creating the button which alerts the user that their order was successful and give the reference

function confirmIt() {

    alert("Congratulations!" + "\n" +
        "Here is your Reference Number: " + "\n" + Math.random().toString(36).substr(2, 9));
}


$(document).ready(function loadFunction() { //functions which run on load
    $("#who, #vision").slideUp(4000).slideDown(4000); //Jquery chained effects on about page
    $("#vision, #vision").animate({ //animations
        opacity: '1.0',
        marginLeft: "0.6in"
    })

});
//Jquery drop-down menu.
function dropDown() {
    $(".promise").slideDown(2000);
}