$(document).ready(function () {
	var productItem = [
		{
			id: 1,
			name: 'God of War',
			price: "200 EGP",
			img: "apple.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "mobile",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",
		},
		{
			id: 2,
			name: 'Death Stranding',
			price: "100 EGP",
			img: "microsoft.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "mobile",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",

		},
		{
			id: 3,
			name: 'The Last Of Us 2',
			price: "400 EGP",
			img: "hp.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "lap",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",
		},
		{
			id: 4,
			name: 'God of War',
			price: "350 EGP",
			img: "apple.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "lap",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",
		},
		{
			id: 5,
			name: 'Death Stranding',
			price: "150 EGP",
			img: "microsoft.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "lap",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",
		},
		{
			id: 6,
			name: 'The Last Of Us 2',
			price: "333 EGP",
			img: "hp.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "pc",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",
		}
		,
		{
			id: 7,
			name: 'God of War',
			price: "444 EGP",
			img: "apple.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "pc",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",
		},
		{
			id: 8,
			name: 'Death Stranding',
			price: "800 EGP",
			img: "microsoft.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "mobile",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",
		},
		{
			id: 9,
			name: 'The Last Of Us 2',
			price: "350 EGP",
			img: "hp.jpg",
			quantity: "1",
			// add: " add to cart",
			brand: "pc",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque amet quos sit obcaecati dolorem molestiae consectetur fuga, voluptas perferendis blanditiis iusto officia beatae iure vel veniam voluptatem assumenda veritatis, eum rerum saepe tempore pariatur ea! Suscipit nisi impedit expedita, soluta asperiores sapiente aperiam officia veniam iste doloribus sunt vitae.",
		}

	];
	showProductGallery(productItem);
	showCartTable();
});

function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	window.location.href = 'cart.html';
	showCartTable();
}

function emptyCart() {
	if (sessionStorage.getItem('shopping-cart')) {
		// Clear JavaScript sessionStorage by index
		sessionStorage.removeItem('shopping-cart');
		showCartTable();
	}
	window.location.href = 'index.html';
}



function removeCartItem(index) {
	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		sessionStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
}

function showCartTable() {
	var cartRowHTML = "";
	var itemCount = 0;
	var grandTotal = 0;
	var price = 0;
	var quantity = 0;
	var subTotal = 0;

	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		itemCount = shoppingCart.length;

		//Iterate javascript shopping cart array
		shoppingCart.forEach(function (item) {
			var cartItem = JSON.parse(item);
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity);
			subTotal = price * quantity

			cartRowHTML += "<tr>" +
				"<td>" + cartItem.productName + "</td>" +
				"<td class='text-right'>£" + price.toFixed(2) + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>£" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
		});
	}

	$('#cartTableBody').html(cartRowHTML);
	$('#itemCount').text(itemCount);
	$('#totalAmount').text("£" + grandTotal.toFixed(2));
}


function showProductGallery(product) {
	//Iterate javascript shopping cart array
	var productHTML = "";
	product.forEach(function (item) {
		productHTML += '<div class="product-item">' +
			'<img src="images/' + item.img + '">' +
			'<div class="productname">' + item.name + '</div>' +
			'<div class="price">£<span>' + item.price + '</span></div>' +
			'<div class="price">brand : <span>' + item.brand + '</span></div>' +
			'<div class="cart-action" >' +
			'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />' +
			'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)"  />' +
			'</div>' +
			'</div>';
		"<tr>";

	});
	$('#product-item-container').html(productHTML);
}
