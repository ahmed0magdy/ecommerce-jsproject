/////// add to cart ////////

let addCart =  document.querySelectorAll(".addProduct");
for (let i = 0;i<addCart.length;i++){
    addCart[i].addEventListener("click",()=>{
        CartNumber(product[i])
    })
}
function onLoadCart(){
    let productNum = localStorage.getItem("cartnumber");
    if([productNum]){
        document.querySelector(".cart span").textContent = productNum;

    }

}
function CartNumber(product){
    // console.log("the product is ",product) // to appear product clicked in console
    let productNum = localStorage.getItem("cartnumber");
    productNum =  parseInt(productNum);
    if(productNum){
        localStorage.setItem("cartnumber", productNum +1);
        document.querySelector(".cart span").textContent = productNum + 1;
    }else{
        localStorage.setItem("cartnumber", 1);
        document.querySelector(".cart span").textContent = 1;

    }
    setItems(product);
}
function setItems(product){
    var cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    // console.log("my cart items are : " , cartItems); //display clicked item
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
onLoadCart();
