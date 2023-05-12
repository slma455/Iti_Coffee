var form = document.getElementById('form');
var username = document.getElementById('userName');
var password = document.getElementById('password');
var email = document.getElementById('email');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
    
})
function checkInputs()
{
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    if(usernameValue === '')
    {
        setErrorFor(username,'username cannot be blank');
        
    }
    else
    {
        setSucceess(username);
        
    }

    if(emailValue === '')
    {
        setErrorFor(email,'email cannot be blank');
   
    }
    else
    {
        setSucceess(email);
      
    }
    if(password.value.length < 8)
    {
        setErrorFor(password,'password cant be smaller than 8 digits');
    }
    else
    {
        setSucceess(password);
    }
   

    
}

function setErrorFor(input,message)
{
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSucceess(input)
{
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}


/*top button*/
var btnTop = document.getElementById("myBtn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }