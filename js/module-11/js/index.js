'use strict';

const laptops = [{
    size: 13,
    color: 'white',
    price: 28000,
    releaseDate: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    releaseDate: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    releaseDate: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    releaseDate: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    releaseDate: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    releaseDate: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    releaseDate: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    releaseDate: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    releaseDate: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const filter = {
  size: [],
  color: [],
  release_date: [],
};

const form = document.querySelector('.js-form');
form.addEventListener('submit', handleSubmit);
form.addEventListener('reset', handleReset);

const list = document.querySelector('.js-list-card');
const source = document.querySelector('#card-list-tpl').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(laptops);
list.insertAdjacentHTML('beforeend', markup);

function handleSubmit(evt) {
  evt.preventDefault();

  filter.size = [];
  filter.color = [];
  filter.release_date = [];

  const chekedCheckbox = Array.from(
    form.querySelectorAll('input[type="checkbox"]:checked'),
  );

  chekedCheckbox.forEach(checkbox => {
    filter[checkbox.name].push(checkbox.value);
  });

  const applyFilter = laptops.filter(
    laptop => {
      const matchedSize = filter.size.length !== 0 ?
        filter.size.includes(String(laptop.size)) :
        true;
      const matchedColor = filter.color.length !== 0 ?
        filter.color.includes(laptop.color) :
        true;
      const matchedReleaseDate = filter.release_date.length !== 0 ?
        filter.release_date.includes(String(laptop.releaseDate)) :
        true;
      return matchedSize && matchedColor && matchedReleaseDate;
    });

  if (applyFilter.length > 0) {
    const filtredMarkup = template(applyFilter);

    list.innerHTML = filtredMarkup;
  }
  if (applyFilter.length === 0) {
    list.innerHTML = '<li><h3>Soory, but your choiced filter not found laptops</h3></li>';
  }
}

function handleReset(evt) {
  list.innerHTML = markup;
}
