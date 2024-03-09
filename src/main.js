// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// const API_KEY = '42458886-d6d62fa6987d6f72b0a5e97bb';
// const LINK = `https://pixabay.com/api/?key=${API_KEY}`;
// const list = document.querySelector('.list');

// fetch(LINK)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(date => fetchImg(date.hits))
//   .catch(error => console.log(error));

// function fetchImg(param) {
//   param.forEach(element => {
//     const listElement = document.createElement('li');
//     const itemImg = document.createElement('img');
//     itemImg.src = element.largeImageURL;
//     itemImg.alt = element.tags;
//     itemImg.width = 400;

//     listElement.appendChild(itemImg);
//     list.appendChild(listElement);
//     // return itemImg;
//   });

//   //   list.insertAdjacentElement('beforeend', listElement);
// }

// ЗАДАЧА 2
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
// //

// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)
const input = document.querySelector('#input');
const form = document.querySelector('#form');
const list = document.querySelector('.list');
const addMore = document.querySelector('.add-more');

let page = 1;
function getURL(event) {
  event.preventDefault();
  const value = input.value;
  fetch(
    `https://api.github.com/search/users?q=${value}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${page}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(date => {
      renderList(date.items);
      page++;
    })
    .catch(error => console.error(error));
}
// login avatar_url html_url

function createUser({ login, avatar_url, html_url }) {
  const user = `<li>
 <a target="_blank" href="${html_url}">
  <img src="${avatar_url}" alt="${login}">
 </a>
 <p>User name: ${login}</p>
</li>`;
  list.insertAdjacentHTML('beforeend', user);
}

function renderList(date) {
  return date.map(element => createUser(element)).join('');
}

form.addEventListener('submit', getURL);
addMore.addEventListener('click', getURL);
