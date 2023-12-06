document.addEventListener('DOMContentLoaded', function () {
  const nav_links = document.querySelector('.nav-links');
  const menuBtn_open = document.querySelector('#menu-btn_open');
  const menuBtn_close = document.querySelector('#menu-btn_close');
  const cursor = document.querySelector('.cursor');
  var timeout;

  menuBtn_open.onclick = () => toggler();
  menuBtn_close.onclick = () => toggler();

  function toggler() {
    nav_links.classList.toggle('active');
    menuBtn_open.classList.toggle('close');
    menuBtn_close.classList.toggle('open');
  }

  document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

    function mouseStopped() {
      cursor.style.display = 'none';
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
  });

  document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
  });
});
