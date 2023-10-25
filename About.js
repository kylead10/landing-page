const nav_links = document.querySelector('.nav-links');
const menuBtn_open = document.querySelector('#menu-btn_open');
const menuBtn_close = document.querySelector('#menu-btn_close');
// console.log(nav_links, menuBtn_open, menuBtn_close);

menuBtn_open.onclick = () => toggler();
menuBtn_close.onclick = () => toggler();
function toggler() {
  nav_links.classList.toggle('active');
  menuBtn_open.classList.toggle('close');
  menuBtn_close.classList.toggle('open');
}
// console.log('nav');
const cursor = document.querySelector('.cursor');
var timeout;
//cursor movement
document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + 'px';
  cursor.style.left = x + 'px';
  cursor.style.display = 'block';

  //stop animation
  function mouseStopped() {
    cursor.style.display = 'none';
  }

  //hide animation
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

//stop animation off screen
document.addEventListener('mouseout', () => {
  cursor.style.display = 'none';
});
