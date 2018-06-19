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
    this._defaultActiveItem = defaultActiveItem - 1;
    this._listPreview = null;
    this._listPreviewItems = null;
    this._fullviewWrap = null;
    this._fullviewImg = null;

    this.createGalleryElement();
  }

  _createClass(Gallery, [{
    key: 'createGalleryElement',
    value: function createGalleryElement() {
      this.createListPreview();
      this.createDefaultFullview();
      this.changeFullviewOnClick();
      this._parentNode.classList.add('image-gallery');
      this._parentNode.append(this._fullviewWrap, this._listPreview);
    }
  }, {
    key: 'createDefaultFullview',
    value: function createDefaultFullview() {
      this._fullviewWrap = document.createElement('div');
      this._fullviewWrap.classList.add('fullpreview');

      this._fullviewImg = document.createElement('img');
      this._fullviewWrap.appendChild(this._fullviewImg);

      var getAttForFullImg = Array.from(this._listPreview.childNodes)[this._defaultActiveItem].firstChild;
      this._fullviewImg.src = getAttForFullImg.dataset.fullview;
      this._fullviewImg.alt = getAttForFullImg.alt;
    }
  }, {
    key: 'createListPreview',
    value: function createListPreview() {
      var _this = this;

      this._listPreview = document.createElement('ul');
      this._listPreview.classList.add('preview');

      this._items.forEach(function (item) {
        _this._listPreviewItems = document.createElement('li');
        var previewImg = document.createElement('img');
        previewImg.src = item.preview;
        previewImg.alt = item.alt;
        previewImg.dataset.fullview = item.fullview;
        _this._listPreviewItems.append(previewImg);
        _this._listPreview.appendChild(_this._listPreviewItems);
      });
    }
  }, {
    key: 'changeFullviewOnClick',
    value: function changeFullviewOnClick() {
      var _this2 = this;

      this._parentNode.addEventListener('click', function (event) {
        var nodeName = event.target.nodeName;

        _this2._fullviewImg.src = event.target.dataset.fullview;
        _this2._fullviewImg.alt = event.target.alt;

        if (nodeName !== 'IMG') return;
      });
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