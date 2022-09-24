//products in json //
var result = '';

// function to display products //
function displayProducts() {
    product.forEach(function (e) {
        result += '<div class="text-center col-md-4 store-product '+ e.brand +' ">' + '<img src="' + e.img + '">' + '<p>' + e.name + '</p>' + e.price + "<br><br>" + '<p> Brand :' + e.brand + "</p>" + '<p>Quantity : <input style="width:20%" type="number" value="' + e.quantity + '"></p>' + '<button class="btn btn-primary">' + e.add + '</button>' + '</div>'
    });

    document.getElementById("train").innerHTML = result;
}
displayProducts();


