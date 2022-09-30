/////// add to cart ////////
let addCart =  document.querySelectorAll(".addProduct");
for (let i = 0;i<addCart.length;i++){
    addCart[i].addEventListener("click",()=>{
        if (sessionStorage.username)
        {
        CartNumber(product[i])
        totalCost(product[i])
        }
        else{alert('please sign in first!')}
    })
}
function onLoadCart(){
    let productNum = localStorage.getItem("CartNumber");
    if(productNum){
        document.querySelector(".cart span").textContent = productNum;

    }

}
function CartNumber(product, action){
    // console.log("the product is ",product) // to appear product clicked in console
    let productNum = localStorage.getItem("CartNumber");
    productNum =  parseInt(productNum);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("CartNumber", productNum - 1);
        document.querySelector('.cart span').textContent = productNum - 1;
        console.log("action running");
    } else if(productNum){
        localStorage.setItem("CartNumber", productNum +1);
        document.querySelector(".cart span").textContent = productNum + 1;
    }else{
        localStorage.setItem("CartNumber", 1);
        document.querySelector(".cart span").textContent = 1;

    }
    setItems(product);
}

function setItems(product){
    let productNum = localStorage.getItem("CartNumber");
    productNum = parseInt(productNum);

    var cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    // console.log("my cart items are : " , cartItems); //display clicked item
    if(productNum == 0){
        //  window.location.href = 'index.html';
        document.getElementById("checkoutss").disabled = true;
        document.getElementById("checkoutss").style.background="grey";
        document.getElementById("checkoutss").style.color="white";
    }else{
        document.getElementById("checkoutss").disabled = false
    }
    if(cartItems != null){
        
        if(cartItems[product.name] == undefined){
            cartItems ={
                ...cartItems,
                [product.name]:product
            }
            
        }
        cartItems[product.name].quantity += 1;
       
    }else{
        product.quantity = 1;
        cartItems ={
           [product.name] : product
       }

    }
   
    localStorage.setItem("productsInCart",JSON.stringify(cartItems))
}

function totalCost( product, action ) {
    let cartCost = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cartCost);

        localStorage.setItem("totalCost", cartCost - product.price);
    } else if(cartCost != null) {
        
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);

    }
}
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);
    let productContainer = document.querySelector('.products');
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += 
            `<div style="display:flex;flex-direction:row;justify-content:space-around;text-align:center;align-items:center"><div class="product"><ion-icon style="cursor:pointer" name="close-circle"></ion-icon><img src="${item.img}" style="max-width:150px;" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">$ ${item.price},00</div>
            <div class="quantity">
                <ion-icon style="cursor:pointer" class="decrease" name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.quantity}</span>
                <ion-icon style="cursor:pointer" class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">$ ${item.quantity * item.price},00</div></div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer" style="position:absolute;right:350px;">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$ ${cartCost},00</h4>
            </div>`

        deleteButtons();
        manageQuantity();
    }
}
function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct);

              if(cartItems[currentProduct].quantity > 1 ) {
              cartItems[currentProduct].quantity -= 1;
                CartNumber(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
              }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct);

            cartItems[currentProduct].quantity += 1;
            CartNumber(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
     }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNum = localStorage.getItem("CartNumber");
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productName;
    if(productNum == 0){
        //  window.location.href = 'index.html';
        document.getElementById("checkoutss").disabled = true;
        document.getElementById("checkoutss").style.background="grey";
        document.getElementById("checkoutss").style.color="white";
    }else{
        document.getElementById("checkoutss").disabled = false
    }
    // console.log(cartItems);
    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.trim();
           
            localStorage.setItem('CartNumber', productNum - cartItems[productName].quantity);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].quantity));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCart();
        })
    }
}


onLoadCart();
displayCart();

