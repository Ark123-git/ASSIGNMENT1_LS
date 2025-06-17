// script.js
// window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav ul li a');
  
//     let current = '';
//     sections.forEach(section => {
//       const top = window.scrollY;
//       const offset = section.offsetTop - 100;
//       const height = section.offsetHeight;
//       if (top >= offset && top < offset + height) {
//         current = section.getAttribute('id');
//       }
//     });
  
//     navLinks.forEach(link => {
//       link.classList.remove('active');
//       if (link.getAttribute('href').includes(current)) {
//         link.classList.add('active');
//       }
//     });
//   });

let sections=document.querySelectorAll("section");
let navs=document.querySelectorAll("nav ul li a");


window.addEventListener("scroll",()=>{

    sections.forEach(section => {
              const top = window.scrollY;
              const offset = section.offsetTop - 80;
              const height = section.offsetHeight;

              if (top >= offset && top < offset + height) {
                current = section.getAttribute('id');

              }
           


            });

navs.forEach(nav=>{
if(nav.getAttribute('href').includes(current)){
nav.classList.add("active");

}
else{
    nav.classList.remove("active");
}

})



})






document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert("All fields are required!");
      return;
    }
  
    const formData = { name, email, message, timestamp: new Date().toISOString() };
  
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(formData);
    localStorage.setItem('messages', JSON.stringify(messages));
  
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('messageForm').reset();

  });



