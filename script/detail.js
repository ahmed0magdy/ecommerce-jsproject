var url = window.location.href,
vars = {};
url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
 key = decodeURIComponent(key);
 value = decodeURIComponent(value);
 value = value.replace(' ', '');
 vars[key] = value;
});

let num = parseInt(vars.id) - 1;



result = '<div id=" ' + num + '" class="store-product ' + product[num].brand + ' container-fluid"><div class="row"><div id="content" class="col-sm-12 main_padding"><div class=""><div class="col-sm-6"><ul class="thumbnails"><li class="main_products_images"><a class="thumbnail" href="' + product[num].img + '" title="Bicycle Accessories"><img id="zoomer_01" src="' + product[num].img + '" data-zoom-image="image/png8-1000x1000.png"/></a></li></ul></div><div class="col-sm-6"><div class="product_right"><h1>'+product[num].name+'</h1><ul class="list-unstyled main-price"><div class="price"><li><h2>$ '+product[num].price+'</h2></li></div><li style="margin-top:20px;margin-bottom:20px;">Brand : <span style="color:rgb(8, 138, 138)">'+product[num].brand+ '</span></li><li style="line-height:35px">'+product[num].desc+'</li></ul><hr/><div id="product"> <div class="form-group plus-minus-input"><div class="qty_option_wrapper"> <div class="input-group-button add_to_cart_option"><button type="button" class="addPro btn btn-primary btn-lg btn-block"><i class="fa fa-shopping-cart"></i> '+product[num].add+'</button></div></div></div></div></div></div></div></div></div></div>'

document.getElementById("details").innerHTML = result;

let addCar =  document.querySelector(".addPro");
addCar.addEventListener("click",()=>{
    CartNumber(product[num])
    totalCost(product[num])})
