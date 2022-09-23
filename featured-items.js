var result = '';

function displayProducts() {
    product.slice(0,4).forEach(function (e) {
        result += '<div class="text-center col-md-3 store-product '+ e.brand +' ">' + '<img src="' + e.img + '">' + '<p>' + e.name + '</p>' + e.price + "<br><br>" + '<p> Brand :' + e.brand + "</p>" + '<p>Quantity : <input style="width:20%" type="number" value="' + e.quantity + '"></p>' + '<button class="btn btn-primary">' + e.add + '</button>' + '</div>'
    });

    document.getElementById("slide-products").innerHTML = result;
}
displayProducts();