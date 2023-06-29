// function getJSON(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         let data = JSON.parse(xhr.responseText);
//         resolve(data);
//       } else {
//         reject(xhr.statusText);
//       }
//     };
//     xhr.onerror = function () {
//       reject("Error de red");
//     };
//     xhr.open("GET", url, true);
//     xhr.send();
//   });
// }

// async function getData() {
//   try {
//     const data = await getJSON("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();




// function getJSON(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       let data = JSON.parse(xhr.responseText);
//       callback(data);
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }

// getJSON("https://jsonplaceholder.typicode.com/todos/8", function (data) {
//   console.log(data);
// });



// fetch("https://jsonplaceholder.typicode.com/todos/10")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));




// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success!");
//   }, 1000);
// });

// promise.then((result) => {
//   console.log(result);
// });