const body = document.querySelector("body");
const bgList = [
  "https://user-images.githubusercontent.com/61649201/131935272-8c9a0cf8-d8ab-4141-b32d-4c4c7c5edde6.jpg",
  "https://user-images.githubusercontent.com/61649201/131935391-241ce779-f208-45bd-8932-b8439b786ec0.jpg",
  "https://user-images.githubusercontent.com/61649201/131935479-62e9394d-a039-4907-b06b-9cfe7a7587b2.jpg",
  "https://user-images.githubusercontent.com/61649201/131935699-f1cbb244-9eac-428f-a4f1-bcacb384f263.jpg",
  "https://user-images.githubusercontent.com/61649201/131935747-90dc69f4-8a7a-4c50-b70d-adffab465917.jpg"
];
const randomNumber = Math.floor(Math.random()*bgList.length);
body.style.backgroundImage = `url(${bgList[randomNumber]})`;
