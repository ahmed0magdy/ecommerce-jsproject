// Name and email
var userName = sessionStorage.getItem("username");
var userInputName= document.getElementById('name')
userInputName.setAttribute('value', userName);

var userEmail = sessionStorage.getItem('email');
var userInputEmail= document.getElementById('email')
userInputEmail.setAttribute('value', userEmail);



// Address

    let address = document.querySelector ('#address').value;
    let street = document.querySelector ('#street').value;
    let city = document.querySelector ('#city').value;
    let landmark = document.querySelector ('#landmark').value;

if(!address.value === " " || !street.value ===" " ||!city.value ===" " ||!landmark.value ===" "){

  
    alert("Enter your address details please");
}
 else
 {
  document.getElementById("submit-order").disabled = false;
  }


document.getElementById("myForm").onsubmit = function() {submission()}, localStorage.clear();
function submission() {
  alert("The order is completed")};
