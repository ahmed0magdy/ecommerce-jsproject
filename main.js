//products in json //
var result = '';

// function to display products //
function displayProducts() {
    product.forEach(function (e) {
        result += '<div class="text-center col-md-4 store-product ' + e.brand + ' ">' + '<img id=" ' + e.id + '"  style="cursor:pointer" src="' + e.img + '">' + '<p class="title">' + e.name + '</p>' + e.price + "<br><br>" + '<p> Brand :' + e.brand + "</p>" + '<button class="addProduct btn-primary">' + e.add + '</button>' + '</div>'
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

