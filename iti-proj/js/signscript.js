 // for sign up and storing data 
 function store(){
       var firstName = document.getElementById('Fname');
        var lastName = document.getElementById('Lname');
        var mail = document.getElementById('mail');
        var password = document.getElementById('pass');
        let msgerror = document.getElementById('error');

    
        var validemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        // var validpass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

        if(firstName.value.length < 2)
        {
            msgerror.textContent = 'First Name should be 2 chars at least';

        }
       else  if(lastName.value.length < 2)
        {
            msgerror.textContent = 'Last Name should be 2 chars at least';
        } 
       else  if(validemail.test(mail.value)==false)
        {
            msgerror.textContent = 'Sorry Not Valid Email!!';
    
        }
        else if (password.value.length < 6)
    //   else  if(validpass.test(password.value)==false) // complex password 
        {
           
            msgerror.textContent = 'password should be at least 6 characters!!';
    
        }

        else 
        {
            console.log('valid email and password');
             msgerror.textContent = 'welcome !';
             msgerror.style.color='green';
    
                  // Saving Data to local storage
            localStorage.setItem('firstName', firstName.value);
            localStorage.setItem('lastName', lastName.value);
            localStorage.setItem('mail', mail.value);
            localStorage.setItem('password', password.value);
            console.log(localStorage.getItem('mail'))
            alert('Your account has been created Successfully!!');
            // window.open('sign-in.html');
            window.location.href = 'sign-in.html';
            
          } 
         
}
                
//checking for login operation
function check(){
    var storedmail = localStorage.getItem('mail');
    var storedPswd = localStorage.getItem('password');
    let msgerror = document.getElementById('error');


    var userMail = document.getElementById('mail');
    var userPass = document.getElementById('pass');
    // var userRemember = document.getElementById("remembrMe");

    if(userMail.value == storedmail && userPass.value == storedPswd){
        alert('You are logged in.');
        
        window.location.href = 'contact.html';

        
   
    }else if(userMail.value.length == 0){
        msgerror.textContent = 'Email may no be empty!!';

    }else if(userPass.value.length == 0)
    {
        msgerror.textContent = 'Password may no be empty!!';

    }
    else
    {
        msgerror.textContent = 'Sorry Email and Password not Registered or matched';

    }



    //remembr me checkbox
}

function Showpswd()
{
    var myPass = document.getElementById('pass'),
    myEye  = document.getElementById('eye');
    myEye.onclick = function() {
     'use strict';
     if (this.className === 'fas fa-eye-slash') {
         myPass.setAttribute('type', 'text');
         this.setAttribute('class', 'fas fa-eye');
         this.setAttribute('style', 'color:#0cca83');
     } else {
         myPass.setAttribute('type', 'password');
         this.setAttribute('class', 'fas fa-eye-slash');
         this.setAttribute('style', 'color:#D91B1B');
     }
 };
}


function validEP()
{
    let msgerror = document.getElementById('error');

    const loginobj = new Object();
    let Email = document.getElementById('mail').value;
    let Password = document.getElementById('pass').value;

    var validemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var validpass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    if(validemail.test(Email) && validpass.test(Password))
    {
        console.log('valid email and password');
         msgerror.textContent = 'welcome !';

    }
    if(validemail.test(Email)==false)
    {
        msgerror.textContent = 'Sorry Not Valid Email!!';

    }
    if(validpass.test(Password)==false)
    {
       
        msgerror.textContent = 'Sorry Not Valid Password!!';

    }


}