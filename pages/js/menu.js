const btnMenu = document.querySelector(".header_right--mobile--menu")
  const mobileMenu = document.querySelector(".header_right--mobile--menu--list--wrapper")

  btnMenu.addEventListener("click", () => {
    mobileMenu.style.transform ="translateX(0)"
  }) 
  
  document.addEventListener("click", (event) => {
  if(!mobileMenu.contains(event.target) && !btnMenu.contains(event.target)) {
    mobileMenu.style.transform ="translateX(100%)"
  }
  }) 