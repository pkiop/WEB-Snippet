// function createCustomTag() {
//   const awesomeTag = document.createElement('awesome-tag');
//   document.querySelector('body').appendChild(awesomeTag);
// }



// createCustomTag();

// 즉시실행함수
// (
//   () => {const awesomeTag = document.createElement('awesome-tag');
//   document.querySelector('body').appendChild(awesomeTag);
// })()
const createCustomTag = () => {
  const awesomeTag = document.createElement('awesome-tag');
  document.querySelector('body').appendChild(awesomeTag);
}

(createCustomTag)()