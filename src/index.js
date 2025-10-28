// import { nanoid } from 'nanoid'

// const people = [
//     { name: 'Олександр', age: 28 },
//     { name: 'Анна', age: 24 },
//     { name: 'Максим', age: 31 },
//     { name: 'Ірина', age: 27 },
//     { name: 'Сергій', age: 35 },
//     { name: 'Наталія', age: 22 },
//     { name: 'Дмитро', age: 29 },
//     { name: 'Олена', age: 26 },
//     { name: 'Юрій', age: 33 },
//     { name: 'Тетяна', age: 30 },
// ];


// const newPeople = people.map(item => {
//     // return item.id = nanoid(5);
//     const array = {...item};
//     array.id = nanoid(5);
//     return array;
// });

// // const findName = "Тетяна";

// // const newFindName = newPeople.find((item) => item.name = findName);

// // console.log(newFindName);
// console.log(newPeople);



import { success, alert, defaultModules } from '@pnotify/core/dist/PNotify.js';

import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/PNotify.css";

defaultModules.set(PNotifyMobile, {});


const btn = document.querySelector('.button');

// btn.addEventListener('click', () => {
//     alert({text: 'Дякую за покупку', delay: 1000});
// })


btn.addEventListener('click', () => {
    success({
        text: 'Дякуємо за покупку',
        delay: 1000
    });
})