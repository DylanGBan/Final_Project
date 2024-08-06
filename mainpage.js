function darkMode() {
  let element = document.body;
  setTimeout(() => {
    element.className = "dark-mode";
  }, 300);

  let content = document.getElementById("button-light-dark");
    setTimeout(() => {
        content.innerHTML =
    '<li class="nav-item"> <button class="btn light-mode-button shadow-none" onclick="lightMode()"><i class="fa-solid fa-sun fa-xl" style="color: #ffffff;"></i></button> </li>';
      }, 300);
    
}


function lightMode() {
  let element = document.body;
  setTimeout(() => {
    element.className = "light-mode";
  }, 300);

  let content = document.getElementById("button-light-dark");

  setTimeout(() => {
    content.innerHTML =
      '<li class="nav-item"> <button class="btn dark-mode-button shadow-none" onclick="darkMode()"><i class="fa-solid fa-moon fa-xl" style="color: #000000;"></i></button> </li>';
  }, 300);
}
