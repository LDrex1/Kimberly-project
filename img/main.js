let today = new Date();
let dateToday = document.querySelector('#day-today');

if (today.getDate() == 1) {
  dateToday.innerHTML = "01";
  dateToday.style.left = "7px";
} else if (today.getDate() == 2) {
  dateToday.innerHTML = "02";
  dateToday.style.left = "5px";
} else if (today.getDate() == 3) {
  dateToday.innerHTML = "03";
  dateToday.style.left = "5px";
} else if (today.getDate() == 4) {
  dateToday.innerHTML = "04";
  dateToday.style.left = "5px";
} else if (today.getDate() == 5) {
  dateToday.innerHTML = "05";
  dateToday.style.left = "5px";
} else if (today.getDate() == 6) {
  dateToday.innerHTML = "06";
  dateToday.style.left = "5px";
} else if (today.getDate() == 7) {
  dateToday.innerHTML = "07";
  dateToday.style.left = "5px";
} else if (today.getDate() == 8) {
  dateToday.innerHTML = "08";
  dateToday.style.left = "5px";
} else if (today.getDate() == 9) {
  dateToday.innerHTML = "09";
  dateToday.style.left = "5px";
} else if (today.getDate() == 10) {
  dateToday.innerHTML = "10";
  dateToday.style.left = "7px";
} else if (today.getDate() == 11) {
  dateToday.innerHTML = "11";
  dateToday.style.left = "8px";
} else if (today.getDate() == 12) {
  dateToday.innerHTML = "12";
  dateToday.style.left = "7px";
} else if (today.getDate() == 13) {
  dateToday.innerHTML = "13";
  dateToday.style.left = "7px";
} else if (today.getDate() == 14) {
  dateToday.innerHTML = "14";
  dateToday.style.left = "7px";
} else if (today.getDate() == 15) {
  dateToday.innerHTML = "15";
  dateToday.style.left = "7px";
} else if (today.getDate() == 16) {
  dateToday.innerHTML = "16";
  dateToday.style.left = "7px";
} else if (today.getDate() == 17) {
  dateToday.innerHTML = "17";
  dateToday.style.left = "7px";
} else if (today.getDate() == 18) {
  dateToday.innerHTML = "18";
  dateToday.style.left = "7px";
} else if (today.getDate() == 19) {
  dateToday.innerHTML = "19";
  dateToday.style.left = "7px";
} else if (today.getDate() == 20) {
  dateToday.innerHTML = "20";
  dateToday.style.left = "5px";
} else if (today.getDate() == 21) {
  dateToday.innerHTML = "21";
  dateToday.style.left = "7px";
} else if (today.getDate() == 22) {
  dateToday.innerHTML = "22";
  dateToday.style.left = "5px";
} else if (today.getDate() == 23) {
  dateToday.innerHTML = "23";
  dateToday.style.left = "5px";
} else if (today.getDate() == 24) {
  dateToday.innerHTML = "24";
  dateToday.style.left = "5px";
} else if (today.getDate() == 25) {
  dateToday.innerHTML = "25";
  dateToday.style.left = "5px";
} else if (today.getDate() == 26) {
  dateToday.innerHTML = "26";
  dateToday.style.left = "5px";
} else if (today.getDate() == 27) {
  dateToday.innerHTML = "27";
  dateToday.style.left = "5px";
} else if (today.getDate() == 28) {
  dateToday.innerHTML = "28";
  dateToday.style.left = "5px";
} else if (today.getDate() == 29) {
  dateToday.innerHTML = "29";
  dateToday.style.left = "5px";
} else if (today.getDate() == 30) {
  dateToday.innerHTML = "30";
  dateToday.style.left = "5px";
} else if (today.getDate() == 31) {
  dateToday.innerHTML = "31";
  dateToday.style.left = "7px";
}

function passwordToggle(){
  let input = document.getElementById("password1");
  let eyeOpen = document.getElementById("eye-open1");
  let eyeClosed = document.getElementById("eye-closed1");

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
  let input = document.getElementById("password2");
  let eyeOpen = document.getElementById("eye-open2");
  let eyeClosed = document.getElementById("eye-closed2");

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

function passwordToggleThree(){
  let input = document.getElementById("password3");
  let eyeOpen = document.getElementById("eye-open3");
  let eyeClosed = document.getElementById("eye-closed3");

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