var result = '';

function displayProducts() {
    product.slice(0,9).forEach(function (e) {
        result += '<div id="'+e.id+'" class="store-product product-layout col-lg-12 col-md-4 col-sm-6 col-xs-12 wow fadeInUp"> <div class="category-thumb transition"><ul class="category_grid category_style_section"><li><figure><div class="image"><a href="#"><img id="'+e.id+'" src="'+e.img+'" alt="Racing Bicycles" title="Racing Bicycles" class="img-responsive" /></a></div><figcaption><h3><a  href="#">'+e.name+'</a></h3>	</figcaption></figure></li></ul></div></div>'
    });

    document.getElementById("category_block").innerHTML = result;
}
displayProducts();