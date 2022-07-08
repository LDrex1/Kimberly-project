function passwordToggle(){
  var input = document.getElementById("password1");
  var eyeOpen = document.getElementById("eye-open1");
  var eyeClosed = document.getElementById("eye-closed1");

  if (input.type ==="password"){
    input.type = "text";
    eyeClosed.style.display = "none";
    eyeOpen.style.display = "block";
  }
  else{
    input.type = "password";
    eyeOpen.style.display = "none";
    eyeClosed.style.display = "block";  
  }
}

function passwordToggleTwo(){
  var input = document.getElementById("password2");
  var eyeOpen = document.getElementById("eye-open2");
  var eyeClosed = document.getElementById("eye-closed2");

  if (input.type ==="password"){
    input.type = "text";
    eyeClosed.style.display = "none";
    eyeOpen.style.display = "block";
  }
  else{
    input.type = "password";
    eyeOpen.style.display = "none";
    eyeClosed.style.display = "block";  
  }
}