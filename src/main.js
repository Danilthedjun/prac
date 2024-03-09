// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

const API_KEY = '42458886-d6d62fa6987d6f72b0a5e97bb';
const LINK = `https://pixabay.com/api/?key=${API_KEY}`;
const list = document.querySelector('.list');

fetch(LINK)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(date => fetchImg(date.hits))
  .catch(error => console.log(error));

function fetchImg(param) {
  param.forEach(element => {
    const listElement = document.createElement('li');
    const itemImg = document.createElement('img');
    itemImg.src = element.largeImageURL;
    itemImg.alt = element.tags;
    itemImg.width = 400;

    listElement.appendChild(itemImg);
    list.appendChild(listElement);
    // return itemImg;
  });

  //   list.insertAdjacentElement('beforeend', listElement);
}
