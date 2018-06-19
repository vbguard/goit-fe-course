'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = function () {
  function Gallery(_ref) {
    var items = _ref.items,
        parentNode = _ref.parentNode,
        defaultActiveItem = _ref.defaultActiveItem;

    _classCallCheck(this, Gallery);

    this._items = items;
    this._parentNode = parentNode;
    this._defaultActiveItem = defaultActiveItem;
    this._list = document.createElement('ul');
  }

  _createClass(Gallery, [{
    key: 'getListPreview',
    value: function getListPreview() {
      var list = this._list;
      list.classList.add('preview');
      console.log('in CreatePrev: ', list);
      this._items.forEach(function (item) {
        var listItem = document.createElement('li');
        var previewImg = document.createElement('img');
        previewImg.src = item.preview;
        previewImg.alt = item.alt;
        previewImg.dataset.fullview = item.fullview;
        listItem.append(previewImg);
        list.appendChild(listItem);
      });
      return list;
    }
  }, {
    key: 'getDefaultFullview',
    value: function getDefaultFullview() {
      var _this = this;

      var wrap = document.createElement('div');
      wrap.classList.add('fullpreview');

      var fullviewImg = document.createElement('img');
      wrap.appendChild(fullviewImg);

      setTimeout(function () {
        var setDefaultFullviewImg = Array.from(_this._list.childNodes)[_this._defaultActiveItem - 1].childNodes;
        fullviewImg.src = setDefaultFullviewImg[0].dataset.fullview;
        fullviewImg.alt = setDefaultFullviewImg[0].alt;
      }, 0);

      return wrap;
    }
  }, {
    key: 'changeFullviewOnClick',
    value: function changeFullviewOnClick() {
      this._list.addEventListener('click', handlePreviewClick);

      function handlePreviewClick(event) {
        console.log('handleClick first: ', event.target);

        var nodeName = event.target.nodeName;
        var getFullviewImg = document.querySelector('.fullpreview > img');

        getFullviewImg.src = event.target.dataset.fullview;
        getFullviewImg.alt = event.alt;

        console.log('handleClick second: ', event.target.nodeName);
        console.log('handleClick second: ', event);

        if (nodeName !== 'IMG') {
          return console.log('not work');
        }
      }
    }
  }, {
    key: 'getGallery',
    value: function getGallery() {
      this._parentNode.classList.add('image-gallery');
      this._parentNode.append(this.getDefaultFullview(), this.getListPreview());
      this.changeFullviewOnClick();
      console.log(this._parentNode);
    }
  }]);

  return Gallery;
}();

;

var galleryItems = [{
  preview: 'img/preview-1.jpeg',
  fullview: 'img/fullview-1.jpeg',
  alt: "alt text 1"
}, {
  preview: 'img/preview-2.jpeg',
  fullview: 'img/fullview-2.jpeg',
  alt: "alt text 2"
}, {
  preview: 'img/preview-3.jpeg',
  fullview: 'img/fullview-3.jpeg',
  alt: "alt text 3"
}, {
  preview: 'img/preview-4.jpeg',
  fullview: 'img/fullview-4.jpeg',
  alt: "alt text 4"
}, {
  preview: 'img/preview-5.jpeg',
  fullview: 'img/fullview-5.jpeg',
  alt: "alt text 5"
}, {
  preview: 'img/preview-6.jpeg',
  fullview: 'img/fullview-6.jpeg',
  alt: "alt text 6"
}];

var mainGallery = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.js-image-gallery'),
  defaultActiveItem: 1
});

var secondGallery = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.js-second-gallery'),
  defaultActiveItem: 3
});
mainGallery.getGallery();
secondGallery.getGallery();