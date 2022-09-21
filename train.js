//products in json //
const product = [
    {
        name: 'God of War',
        price: "50 EGP",
        img: "images/apple.jpg",
        quantity: "1",
        add: " add to cart",
        brand: "mobile"
    },
    {
        name: 'Death Stranding',
        price: "250 EGP",
        img: "images/microsoft.jpg",
        quantity: "1",
        add: " add to cart"
        ,
        brand: "mobile"
    },
    {
        name: 'The Last Of Us 2',
        price: "350 EGP",
        img: "images/hp.jpg",
        quantity: "1",
        add: " add to cart",
        brand: "lap"
    },
    {
        name: 'God of War',
        price: "50 EGP",
        img: "images/apple.jpg",
        quantity: "1",
        add: " add to cart",
        brand: "lap"
    },
    {
        name: 'Death Stranding',
        price: "250 EGP",
        img: "images/microsoft.jpg",
        quantity: "1",
        add: " add to cart",
        brand: "lap"
    },
    {
        name: 'The Last Of Us 2',
        price: "350 EGP",
        img: "images/hp.jpg",
        quantity: "1",
        add: " add to cart",
        brand: "pc"
    }
    ,
    {
        name: 'God of War',
        price: "50 EGP",
        img: "images/apple.jpg",
        quantity: "1",
        add: " add to cart",
        brand: "pc"
    },
    {
        name: 'Death Stranding',
        price: "250 EGP",
        img: "images/microsoft.jpg",
        quantity: "1",
        add: " add to cart",
        brand: "mobile"
    },
    {
        name: 'The Last Of Us 2',
        price: "350 EGP",
        img: "images/hp.jpg",
        quantity: "1",
        add: " add to cart",
        brand: "pc"
    }
];

var result = '';

// function to display products //
function displayProducts() {
    product.forEach(function (e) {
        result += '<div class="text-center col-md-4">' + '<img src="' + e.img + '">' + '<p>' + e.name + '</p>' + e.price + "<br><br>" + '<p> Brand :' + e.brand + "</p>" + '<p>Quantity : <input style="width:20%" type="number" value="' + e.quantity + '"></p>' + '<button class="btn btn-primary">' + e.add + '</button>' + '</div>'
    });
    document.getElementById("trains").innerHTML = result;
}
displayProducts();


//filtering products //

//pc filter //

function pcFilter() {
    var newArray = product.filter(function (el) {
        return el.brand==="pc"
    })
    console.log(newArray);

}

//mobile filter //
function mobileFilter() {
    var newArray = product.filter(function (el) {
        return el.brand == "mobile"
    })
    console.log(newArray)
}

//lap FIlter //
function lapFilter() {
    var newArray = product.filter(function (el) {
        return el.brand == "lap"
    })
    console.log(newArray)
}


