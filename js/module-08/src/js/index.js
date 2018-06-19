'use strict';

class Gallery {
  constructor({
    items,
    parentNode,
    defaultActiveItem
  }) {
    this._items = items;
    this._parentNode = parentNode;
    this._defaultActiveItem = defaultActiveItem;
    this._list = document.createElement('ul');
  }

  getListPreview() {
    const list = this._list;
    list.classList.add('preview');
    console.log('in CreatePrev: ', list);
    this._items.forEach(item => {
      const listItem = document.createElement('li');
      const previewImg = document.createElement('img');
      previewImg.src = item.preview;
      previewImg.alt = item.alt;
      previewImg.dataset.fullview = item.fullview;
      listItem.append(previewImg);
      list.appendChild(listItem);
    });
    return list;
  }

  getDefaultFullview() {
    const wrap = document.createElement('div');
    wrap.classList.add('fullpreview');

    const fullviewImg = document.createElement('img');
    wrap.appendChild(fullviewImg);

    setTimeout(() => {
      const setDefaultFullviewImg = Array.from(this._list.childNodes)[this._defaultActiveItem - 1].childNodes;
      fullviewImg.src = setDefaultFullviewImg[0].dataset.fullview;
      fullviewImg.alt = setDefaultFullviewImg[0].alt;
    }, 0)

    return wrap;
  }

  changeFullviewOnClick() {
    this._list.addEventListener('click', handlePreviewClick);

    function handlePreviewClick (event) {
      console.log('handleClick first: ',event.target);

      const nodeName = event.target.nodeName;
      const getFullviewImg = document.querySelector('.fullpreview > img');

      getFullviewImg.src = event.target.dataset.fullview;
      getFullviewImg.alt = event.alt;

      console.log('handleClick second: ',event.target.nodeName);
      console.log('handleClick second: ',event);

      if (nodeName !== 'IMG') {
        return console.log('not work');
    }
  }
}

  getGallery() {
    this._parentNode.classList.add('image-gallery');
    this._parentNode.append(this.getDefaultFullview(), this.getListPreview());
    this.changeFullviewOnClick();
    console.log(this._parentNode);
  }
};

const galleryItems = [{
    preview: 'img/preview-1.jpeg',
    fullview: 'img/fullview-1.jpeg',
    alt: "alt text 1"
  },
  {
    preview: 'img/preview-2.jpeg',
    fullview: 'img/fullview-2.jpeg',
    alt: "alt text 2"
  },
  {
    preview: 'img/preview-3.jpeg',
    fullview: 'img/fullview-3.jpeg',
    alt: "alt text 3"
  },
  {
    preview: 'img/preview-4.jpeg',
    fullview: 'img/fullview-4.jpeg',
    alt: "alt text 4"
  },
  {
    preview: 'img/preview-5.jpeg',
    fullview: 'img/fullview-5.jpeg',
    alt: "alt text 5"
  },
  {
    preview: 'img/preview-6.jpeg',
    fullview: 'img/fullview-6.jpeg',
    alt: "alt text 6"
  },
];

const mainGallery = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.js-image-gallery'),
  defaultActiveItem: 1
});

const secondGallery = new Gallery ({
  items: galleryItems,
  parentNode: document.querySelector('.js-second-gallery'),
  defaultActiveItem: 3
})
mainGallery.getGallery();
secondGallery.getGallery();
