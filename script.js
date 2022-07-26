navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  profile.classList.remove('active');
}
profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
  profile.classList.toggle('active');
  navbar.classList.remove('active');
}
window.oncroll = () => {
  navbar.classList.remove('active');
  profile.classList.remove('active');
}
function loader(){
  document.querySelector('.loader').style.display = 'none';
}
function fadeOut(){
  setInterval(loader, 2000);
}
window.onload = fadeOut;