var url = window.location.href,
vars = {};
url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
 key = decodeURIComponent(key);
 value = decodeURIComponent(value);
 value = value.replace(' ', '');
 vars[key] = value;
});
console.log(vars.id);
let num = parseInt(vars.id) - 1;
console.log(product[num]);

result = '<div id=" ' + num + '" class="text-center col-md-4 store-product ' + product[num].brand + ' ">' + '<img src="' + product[num].img + '">' + '<p>' + product[num].name + '</p>' + '<p>'+product[num].desc+'</p>' + product[num].price + "<br><br>" + '<p> Brand :' + product[num].brand + "</p>" + '<button class="addProduct btn-primary">' + product[num].add + '</button>' + '</div>'

document.getElementById("details").innerHTML = result;

