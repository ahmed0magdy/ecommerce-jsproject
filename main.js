//products in json //
var result = '';

// function to display products //
function displayProducts() {
    product.forEach(function (e) {

        result += '<div id=" ' + e.id + '" class="text-center col-md-4 store-product ' + e.brand + ' ">' + '<img style="cursor:pointer" id=" ' + e.id + '" src="' + e.img + '">' + '<p id=" ' + e.id + '">' + e.name + '</p> EGP ' + e.price + "<br><br>" + '<p> Brand :' + e.brand + "</p>"  + '<button class="addProduct btn-primary">' + e.add + '</button>' + '</div>'

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

document.querySelectorAll('img, p:first-of-type').forEach(function (el) {
    el.addEventListener('click', function () {
        detailedProduct(this.id);
    });
});


