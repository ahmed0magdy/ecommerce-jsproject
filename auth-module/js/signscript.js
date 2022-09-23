 // for sign up and storing data 
 var dataarr = new Array();

 // dummy data for loading
function admin()
{
    var admindata = {
        firstName:'admin',
        lastName:'admin',
        mail:'admin@admin.com',
        password:'123456'
    }
    dataarr.push(admindata);
    localStorage.setItem('data',JSON.stringify(dataarr));

}// end admin func.

// sign up saving data and validation
function store(event)
{
        var firstName = document.getElementById('Fname');
        var lastName = document.getElementById('Lname');
        var mail = document.getElementById('mail');
        var password = document.getElementById('pass');
        let msgerror = document.getElementById('error');

    
        var validemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        // var validpass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        //sign up validation
        if(firstName.value.length < 2)
        {
            msgerror.style.display='block';
            msgerror.textContent = 'First Name should be 2 chars at least';
        }
        else  if(lastName.value.length < 2)
        {
            msgerror.style.display='block';
            msgerror.textContent = 'Last Name should be 2 chars at least';
        } 
        else  if(validemail.test(mail.value)==false)
        {
            msgerror.style.display='block';
            msgerror.textContent = 'Sorry Not Valid Email!!';
    
        }
        else if (password.value.length < 6)
    //   else  if(validpass.test(password.value)==false) // complex password 
        {
            msgerror.style.display='block';
            msgerror.textContent = 'password should be at least 6 characters!!';
    
        }
                ////  registering data 
        else 
        {
             msgerror.textContent = 'welcome !';
             msgerror.style.color='green';
             var data =
             {
                firstName:firstName.value,
                lastName:lastName.value,
                mail:mail.value,
                password:password.value
             }

            var Datastring = localStorage.getItem('data');
            var objData = JSON.parse(Datastring);
             var exist = false ;
            for(let i =0 ; i<objData.length; i++)
            {         
                // check if email exists
                if(objData[i].mail == mail.value) // 0 -> admin -> false but 1 -> duplicate
                {
                    alert('This E-mail is already registerd');
                    exist = true;

                } 
            }
           
            if(!exist)
            {
                    dataarr.push(data);
                    // console.log(dataarr);
                    localStorage.setItem('data',JSON.stringify(dataarr));
                    alert('Your account has been created Successfully!!');
                    // window.location.href = 'sign-in.html';
                    // location.assign('sign-in.html');

            }
         
          }  // end else saving data  
          event.preventDefault(); // stop clearning data but not working yet !
   
}

//checking for login operation
function check(event){
   
    var Datastring = localStorage.getItem('data');
     var objData = JSON.parse(Datastring);
     
    let msgerror = document.getElementById('error');
    var userMail = document.getElementById('mail');
    var userPass = document.getElementById('pass');
    // var userRemember = document.getElementById("remembrMe");

    if(userPass.value.length == 0)
    {
        msgerror.style.display='block';
        msgerror.textContent = 'Password may not be empty!!';

    }
    else{
        if(objData.length == 0)
        {
            alert('no data ,please sign up first')
        }
        else
        {
            for(let i =0 ; i<objData.length; i++)
            {        console.log('hello test');

                if(objData[i].mail == userMail.value)
                {
                    if(objData[i].password == userPass.value)
                    {
                        alert('You are logged in..');
                        var username = objData[i].firstName;
                        sessionStorage.username=username;
                        window.location.href = 'contact.html'; 
                    }
                    else
                    {
                        msgerror.textContent = 'Incorrect Password!!';

                    }
                }
                else
                {     
                    msgerror.textContent = 'Email not Regitered!!!!';
                }
            }
        }
    }

    event.preventDefault()
    //remembr me checkbox
}


// get user session
function myuser()
{
    var usercon= document.getElementById('user');
    if (sessionStorage.username)
    {
        usercon.textContent = 'welcome: '+sessionStorage.username;

    }
    else 
    {
        usercon.textContent = 'unknown user';

    }
}
  
// logout 
function logout()
{
    sessionStorage.removeItem('username');
    window.location.href = 'contact.html';

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


