document.addEventListener("DOMContentLoaded", () => {
 
  let toggle_navbar = document.getElementById("toggle_navbar");
  let navbar = document.querySelector("nav");
  

  toggle_navbar.addEventListener("click", () => {
    let is_close = navbar.classList.contains("close");
    
    if(is_close)
    { navbar.classList.add("open");
      navbar.classList.remove("close")
    }
    else
    { navbar.classList.add("close");
      navbar.classList.remove("open");
    }
    
  });
});