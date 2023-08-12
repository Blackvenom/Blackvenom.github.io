document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelector('.navbar');
  //Get all list items
  const list_items = document.querySelectorAll('nav li');
  //Get all links in the navbar
  const links = document.querySelectorAll('nav a');
  //Get all icons in the navbar
  const icons = document.querySelectorAll('nav i');
  //Get all sections
  const sections = document.querySelectorAll("section");


  // Jumps to corresponding section on click of each navbar item
  //=======================
  // add click event listener to each link
  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // prevent default link behavior
      const sectionId = link.getAttribute('href'); // get the section id from the link href
      const section = document.querySelector(sectionId); // select the corresponding section
      section.scrollIntoView({ behavior: 'smooth' }); // scroll the page to the section
    });
    // add click event listener to the corresponding icon
    const icon = icons[index];
    icon.addEventListener('click', (event) => {
      link.click(); // trigger click event on the corresponding link
    });
  });

  //OnScroll event
  window.addEventListener('scroll', function() {

    // Hides the navbar on top of the website
    //=======================
    if (window.scrollY === 0) {
      navbar.classList.remove('visible');
    } else {
      navbar.classList.add('visible');
    }

    //Highlights the corresponding navbar item depending on the current section
    //=======================
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
  
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        for (let j = 0; j < links.length; j++) {
          const navItem = links[j];
          const navIcon = icons[j];
          const sectionId = navItem.getAttribute("href").substring(1);

          if (sectionId === section.id) {
            navItem.classList.add("active");
            navIcon.classList.add("active");
          } else {
            navItem.classList.remove("active");
            navIcon.classList.remove("active");
          }
        }
        break;
      }
    }

    //Workaround for bottom section, as its too small to reach ever the screens-width
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || window.pageYOffset;
    const navItem = links[links.length-1];
    const navIcon = icons[links.length-1];
    
    if((scrollTop + windowHeight) >= scrollHeight) {
      //Put all Icons in Navbar to normal state
      for (let j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
        icons[j].classList.remove("active");
      }
      //Highlight only last icon in Navbar
      navItem.classList.add("active");
      navIcon.classList.add("active");
    }
    else {
      navItem.classList.remove("active");
      navIcon.classList.remove("active");
    }
/*
    //Manually readjust the x-translation of "activated" icon
    //=======================
    const idea_icon = document.querySelector(".fa-sharp.fa-solid.fa-lightbulb");
    //const idea_icon = this.document.getElementsByClassName("fa-sharp fa-solid fa-lightbulb")[0];
    if(idea_icon.classList.contains("active")){
      idea_icon.style.transform = "translateX(-50%)";
    }
    else {
      idea_icon.style.transform = "translateX(0%)";
    }*/
    });
});