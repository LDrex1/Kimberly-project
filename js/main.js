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

$(document).ready(function(){
  $("body").on("click",".table-guest-name",function(){
    $("#adminTableModal").addClass("position-absolute");
    $(".modal-backdrop").addClass("position-absolute");
    $("#adminTableModal").modal("show");
    $('.modal-backdrop').appendTo('.main-content');
    $('body').removeClass("modal-open")
    $('body').css("padding-right","");     
  });
});

let tabBtns = document.querySelectorAll('.tab-btn');
let tabPages = document.querySelectorAll('.tab-page');

tabBtns.forEach(tabBtn => {
  tabBtn.addEventListener("click",function() {
    for (let i = 0; i < tabBtns.length; i++) {
      tabBtns[i].classList.remove('current');
      tabPages[i].classList.add('hide');
    }

    let pageTarget = document.querySelector(`${tabBtn.dataset.page}`);

    tabBtn.classList.add('current');
    pageTarget.classList.remove('hide');
  })
})


let dropdownBtn1 = document.querySelector('#sort-btn-1');
let dropdown1 = document.querySelector('#sort-dropdown-1');

dropdownBtn1.addEventListener("click", function () {
  dropdown1.classList.toggle("hide");
});

let dropdowns = document.querySelectorAll('.btn-dropdown');
let dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(dropdownItem => {
  dropdownItem.addEventListener("click", function() {
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.add("hide");
    }
  });
});

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button') && !event.target.matches('.dropdown-button-text') && !event.target.matches('.dropdown-button-span') && !event.target.matches('.dropdown-button-icon')) {
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (!openDropdown.classList.contains('hide')) {
        openDropdown.classList.add('hide');
      }
    }
  }
}