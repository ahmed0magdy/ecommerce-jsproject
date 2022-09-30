// Name and email
var userName = sessionStorage.getItem("username");
var userInputName= document.getElementById('name')
userInputName.setAttribute('value', userName);

var userEmail = sessionStorage.getItem('email');
var userInputEmail= document.getElementById('email')
userInputEmail.setAttribute('value', userEmail);



// Address

document.getElementById('submit-order').disabled = true; //Disable at first


document.getElementById('address').addEventListener('keyup', e => {
  //Check for the input's value
  if (e.target.value == "") {
    document.getElementById('submit-order').disabled = true;
  }
  else {
    document.getElementById('submit-order').disabled = false;
  }
});


document.getElementById("myForm").onsubmit = function() {
    submission()
    localStorage.clear();
}
function submission() {
  alert("The order is completed")};