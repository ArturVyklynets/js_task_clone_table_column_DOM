'use strict';

const collectionOfTr = document.querySelectorAll('tr');

collectionOfTr.forEach((elem) => {
  const td = document.createElement(elem.firstElementChild.tagName);

  td.textContent =
    elem.firstChild.nextElementSibling.nextElementSibling.textContent;
  elem.insertBefore(td, elem.lastElementChild);
});
