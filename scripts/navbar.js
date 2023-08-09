document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelector('.navbar');
  // select all links in the navbar
  const links = document.querySelectorAll('nav a');
  const links_icons = document.querySelectorAll('nav i');
  // select all images in the navbar
  const images = document.querySelectorAll('nav i');
  // Get all sections
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
    // add click event listener to the corresponding image
    const image = images[index];
    image.addEventListener('click', (event) => {
      link.click(); // trigger click event on the corresponding link
    });
  });
  
  // Hides the navbar on top of the website
  //=======================
  window.addEventListener('scroll', function() {
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
          const navIcon = links_icons[j];
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
  });

  

});