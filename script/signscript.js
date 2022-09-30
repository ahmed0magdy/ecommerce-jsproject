 // for sign up and storing data 
 var dataarr = JSON.parse(sessionStorage.getItem('data')) || [];


var msgerror = document.getElementById('error');

// sign up saving data and validation
function store(event)
{   
        var firstName = document.getElementById('input-firstname');
        var lastName = document.getElementById('input-lastname');
        var mail = document.getElementById('input-email');
        var password = document.getElementById('input-password');
        var confirmpass = document.getElementById('input-confirm');

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
             var data =
             {
                firstName:firstName.value,
                lastName:lastName.value,
                mail:mail.value,
                password:password.value
             }
            var exist = false ;
            var Datastring = sessionStorage.getItem('data');
            var objData = JSON.parse(Datastring) || [];
            if(objData.length == 0)
            {
                //confirm password
                if(password.value == confirmpass.value)
                {
                    dataarr.push(data);
                    sessionStorage.setItem('data',JSON.stringify(dataarr));
                    // alert('Your account has been created Successfully!!');
                    window.location.href = 'login.html';

                }
                else 
                {
                    msgerror.style.display='block';
                   msgerror.textContent = 'password not match!!';
    
                }
                

            }
            else
            {
                for(let i =0 ; i<objData.length; i++)
                {         
                    // check if email exists
                    if(objData[i].mail == mail.value) 
                    {
                        alert('This E-mail is already registerd');
                        exist = true;

                    } 
                }
            
                if(!exist)
                {
                       //confirm password
                        if(password.value == confirmpass.value)
                        {
                            dataarr.push(data);
                            sessionStorage.setItem('data',JSON.stringify(dataarr));
                            // alert('Your account has been created Successfully!!');
                            window.location.href = 'login.html';

                        }
                        else 
                        {
                            msgerror.style.display='block';
                            msgerror.textContent = 'password not match!!';
            
                        }

                }
            } 
         
          }  // end else saving data  
          event.preventDefault(); 
   
}

//checking for login operation
function check(event){
   
    var Datastring = sessionStorage.getItem('data');
     var objData = JSON.parse(Datastring) || [];
     
    // let msgerror = document.getElementById('error');
    var userMail = document.getElementById('input-email');
    var userPass = document.getElementById('input-password');
    // var userRemember = document.getElementById("remembrMe");
    if(userMail.value.length == 0)
    {
        msgerror.style.display='block';
        msgerror.textContent = 'Email may not be empty!!';

    }
    else if(userPass.value.length == 0)
    {
        msgerror.style.display='block';
        msgerror.textContent = 'Password may not be empty!!';

    }
    else{
        if(objData.length == 0)
        {
            msgerror.textContent = 'Email Not Registered!!';
            // window.location.href = 'register.html';
        }
        else
        {
            for(let i =0 ; i<objData.length; i++)
            {      

                if(objData[i].mail == userMail.value && objData[i].password == userPass.value)
                {
                       
                        // alert('You are logged in..');
                        var username = objData[i].firstName;
                        var mail = objData[i].mail;
                        // set user session
                        sessionStorage.username=username;
                        sessionStorage.email=mail; 
                        window.location.href = 'index.html'; 
                 
                   
                }
                else
                {     
                    msgerror.textContent = 'Incorrect Email or Password!';
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
    var regist = document.getElementById('register');
    var login = document.getElementById('login');
    var logout = document.getElementById('logout');

    regist.style.display='none';
    login.style.display='none';
    logout.style.display='none';


    var usercon= document.getElementById('user');
    if (sessionStorage.username)
    {
        usercon.textContent = sessionStorage.username;
        logout.style.display='block';


    }
    else 
    {
        usercon.textContent = 'Account';
        regist.style.display='block';
        login.style.display='block';

    }
}
  
// logout 
function logout()
{
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    myuser()
    window.location.href = 'login.html';

}
function auth()
{
    if (sessionStorage.username)
    {
        window.location.href = 'index.html';

    }
}
function auths()
{
    if (!sessionStorage.username)
    {
        window.location.href = 'index.html';

    }
}

function msg()
{
    var userMail = document.getElementById('input-email');
    var name = document.getElementById('input-name');
    var msg = document.getElementById('input-enquiry');
    if(userMail.value.length == 0)
    {
        msgerror.style.display='block';
        msgerror.textContent = 'Email may not be empty!!';

    }
    else if(msg.value.length == 0)
    {
        msgerror.style.display='block';
        msgerror.textContent = 'Please insert your message!!';

    }
    else if(name.value.length == 0)
    {
        msgerror.style.display='block';
        msgerror.textContent = 'name may not be empty!!';

    }else {
        alert('Thank You , Your Message Sent Successfully');
        // location.assign('index.html');
        window.location.href = 'index.html';


    }


}

function Showpswd()
{
    var myPass = document.getElementById('input-password'),
    myEye  = document.getElementById('eye');
    myEye.onclick = function() {
     'use strict';
     if (this.className === 'fa fa-eye-slash') {
         myPass.setAttribute('type', 'text');
         this.setAttribute('class', 'fa fa-eye');
         this.setAttribute('style', 'color:#0cca83');
     } else {
         myPass.setAttribute('type', 'password');
         this.setAttribute('class', 'fa fa-eye-slash');
         this.setAttribute('style', 'color:#D91B1B');
     }
 };
}


