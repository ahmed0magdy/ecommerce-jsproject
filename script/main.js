//products in json //
var result = '';

// function to display products //
function displayProducts() {
    product.forEach(function (e) {

         result += '<div id="'+e.id+'"class="'+e.brand+' col-lg-2 col-md-4 col-sm-12 item store-product"><div class="product-thumb transition"><div class="image"><img style="cursor:pointer" id="'+e.id+'" src="'+e.img+'" alt="" title="" class="imaged img-responsive" /><img style="cursor:pointer" id="'+e.id+'" src="'+e.img+'" alt="" title="" class="imaged img-responsive hover-image" /></div><div class="caption"><div class="rate-and-title"><h4><a href="#">'+e.name+'</a></h4><p class="price">$ '+e.price+'</p><div><button style="text-align:center;margin-left:22px;" class="addProduct btn addProduct btn-danger">'+e.add+'</button></div></div></div></div></div>'

    });

    document.getElementById("product-layout").innerHTML = result;
    // console.log(result)
}
displayProducts();

function detailedProduct(id) {
    // alert(id);
    // let v1 = document.getElementById('id');
    const url = "product-header.html?id="+id;
    window.location.href = url;
}

document.querySelectorAll('.imaged').forEach(function (el) {
    el.addEventListener('click', function () {
        detailedProduct(this.id);
    });
});


