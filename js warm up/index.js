// let todo = (link) => {
//     return new Promise((resolve, reject) => {
//         let request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 let data = JSON.parse(request.responseText);
//                 resolve(data)
//             } else if (request.status === 404) {
//                 reject('error');
//             }
//         });
//         request.open('GET', link);
//         request.send();
//     });
// };


// work data -> data2 ->data3
// todo('https://jsonplaceholder.typicode.com/todos')
//     .then((data) => {
//         console.log(data);
//         return todo('https://jsonplaceholder.typicode.com/todos/1');
//     })
//     .then((data2) => {
//         console.log(data2);
//         return todo('https://jsonplaceholder.typicode.com/todos/2');
//     })
//     .then((data3) => {
//         console.log(data3);
//     })
//     .catch((error) => console.log(error))

// function action(callback, x, y) {
//     callback(x, y);
// };

// action((x, y) => {
//     console.log(x * y);
// }, 2, 3);

// let todo = () => {
//     fetch('https://jsonplaceholder.typicode.com/toddos')
//         .then((response) => {
//             if (response.status !== 200) {
//                 throw new Error('Error shi nay tal');
//             }
//             return response.json();
//         })
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error))
// }
// todo();'

let getJson = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos'); //promise
    if (response.status !== 200) {
        return new Error('error shi tal bya');
    }
    let data = await response.json();
    return data; //promise
}
getJson()
    .then((data) => console.log(data))
    .catch((error) => console.log(error))