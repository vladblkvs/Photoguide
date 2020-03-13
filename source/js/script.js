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

var photoBlock = document.querySelector('.gallery__photos');
var galleryLeftPart = photoBlock.querySelector('.gallery__inner--left');
var galleryRightPart = photoBlock.querySelector('.gallery__inner--right');
var GAP = 20;
var PADDING = 70 * 2;

var movePhotosToLeft = function () {
  if (photoBlock.offsetWidth >= 1200) {
    galleryLeftPart.classList.remove('gallery__inner--slide-right');
    galleryRightPart.classList.remove('gallery__inner--slide-right');
    galleryLeftPart.classList.add('gallery__inner--slide-left');
    galleryRightPart.classList.add('gallery__inner--slide-left');
    var shift = (photoBlock.offsetWidth - PADDING) - (galleryLeftPart.offsetWidth + GAP + galleryRightPart.offsetWidth);
    var transform = 'translateX('+ shift + 'px)';
    galleryLeftPart.style.transform = transform;
    galleryRightPart.style.transform = transform;
    galleryRightPart.removeEventListener('mouseover', movePhotosToLeft);
    galleryLeftPart.addEventListener('mouseover', movePhotosToRight);
  }
};

var movePhotosToRight = function () {
  galleryLeftPart.classList.remove('gallery__inner--slide-left');
  galleryRightPart.classList.remove('gallery__inner--slide-left');
  galleryLeftPart.classList.add('gallery__inner--slide-right');
  galleryRightPart.classList.add('gallery__inner--slide-right');
  galleryLeftPart.style.transform = '';
  galleryRightPart.style.transform= '';
  galleryRightPart.removeEventListener('mouseover', movePhotosToRight);
  galleryRightPart.addEventListener('mouseover', movePhotosToLeft);
}

galleryRightPart.addEventListener('mouseover', movePhotosToLeft);

photoBlock.addEventListener('mouseleave', function () {
  movePhotosToRight();
});

