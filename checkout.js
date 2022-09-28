// window.onload = () => {
//     if (!localStorage.user){
//         location.replace('/login');
//     }
// }


// cart functions, adding and deleting
let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems );
// var itemsNames = localStorage.getItem('productsName');
// var userItemsNames= document.getElementById('itemsNames')
// userItemsNames.setAttribute('value', itemsNames);

// var itemsPrice = localStorage.getItem('price');
// var userItemsPrices= document.getElementById('itemsPrice')
// userItemsPrices.setAttribute('value', itemsPrice);

// var itemsQuantity = localStorage.getItem('quantity');
// var userItemsQuantity= document.getElementById('itemsQuantity')
// userItemsQuantity.setAttribute('value', itemsQuantity);

// var itemsTotal = localStorage.getItem('cartTotal');
// var userItemsTotal= document.getElementById('itemsTotal')
// userItemsTotal.setAttribute('value',itemsTotal);

// var sumOfTotal = localStorage.getItem('totalCost');
// var userInputName= document.getElementById('sumOfTotal')
// userInputName.setAttribute('value', sumOfTotal);





// Name and email
// var userName = SessionStorage.getItem('userName');
// var userInputName= document.getElementById('name')
// userInputName.setAttribute('value', userName);

// var userEmail = SessionStorage.getItem('email');
// var userInputEmail= document.getElementById('email')
// userInputEmail.setAttribute('value', userEmail);


 

// const placeOrderBtn = document.querySelector('.submit-order');
// placeOrderBtn.addEventListener('click' , () =>{
// let address = getAddress();

// })
// confirming address
// const getAddress = () => {
//     let address = document.querySelector ('#address').value;
//     let street = document.querySelector ('#street').value;
//     let city = document.querySelector ('#city').value;
//     let landmark = document.querySelector ('#landmark').value;

//     if(!address.length || !street.length ||!city.length ||!landmark.length){
//         return showAlret('fill all the inputs first');
//        }
//        else{
//             return {address, street, city, landmark};
//         }
//     }


//     if (address){
//         fetch('/order', {
//             method: 'post',
//             headers: new Headers({'content-type': 'application/json'}),
//             body:JSON.stringify({
//                 order:JSON.parse(sessionStorage.cart),
//                 email: JSON.parse(sessionStorage.user).email,
//                 add:address,
//             })
//         }).then(res => res.json())
//         .then(data =>{
            
//             if (data.alret == 'Your order is placed'){
//                 showAlert(data.alert, 'success');
//             }
//             else {
//                 showAlert(data.alert,);
//             }
//             ;
//         })
//     }