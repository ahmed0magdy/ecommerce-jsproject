//products in json //
var result = '';

// function to display products //
function displayProducts() {
    product.forEach(function (e) {
        result += '<div class="text-center col-md-4 store-product ' + e.brand + ' ">' + '<img id=" ' + e.id + '"  style="cursor:pointer" src="' + e.img + '">' + '<p class="title">' + e.name + '</p>' + e.price + "<br><br>" + '<p> Brand :' + e.brand + "</p>" + '<p>Quantity : <input style="width:20%" type="number" value="' + e.quantity + '"></p>' + '<button class="addProduct btn-primary">' + e.add + '</button>' + '</div>'
    });

    document.getElementById("train").innerHTML = result;
}
displayProducts();

function detailedProduct(id) {
    // alert(id);
    // let v1 = document.getElementById('id');
    const url = "detail.html?id="+id;
    window.location.href = url;
}

document.querySelectorAll('img').forEach(function (el) {
    el.addEventListener('click', function () {
        detailedProduct(this.id);
    });
});

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
    setItems(product)
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
  
        if(cartItems[product.id] == undefined){
            cartItems = {
            ...cartItems,
            [product.name] : product
            }
        }
        cartItems[product.name].quantity  += 1;
    }
    else{
        product.quantity = 1;
        cartItems = {
            [product.name] : product
        }
    
    }

    localStorage.setItem("productsInCart ",JSON.stringify(cartItems))
}
setItems()
onLoadCart();