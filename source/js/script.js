'use strict'

var header = document.querySelector('.page-header');
var menuBtn = header.querySelector('.page-header__toggle-menu-btn');

var onMenuBtnClick = function () {
  if (header.classList.contains('page-header--expanded')) {
    header.classList.add('page-header--closed');
    document.body.classList.remove('no-scroll');
    setTimeout(hideMenu, 150);
  } else {
    header.classList.add('page-header--expanded');
    document.body.classList.add('no-scroll');
  }
};

menuBtn.addEventListener('click', onMenuBtnClick);

var hideMenu = function () {
  header.classList.remove('page-header--expanded');
  header.classList.remove('page-header--closed');
};
