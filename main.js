let jobDesc = document.getElementsByTagName("span");
let arr = ['Developer', 'Freelancer', 'Designer', 'Photographer', 'Trader'];

let randTimer = setInterval(() => {
    let randNum = Math.floor(Math.random() * arr.length);
    jobDesc[0].innerText = arr[randNum];
}, 1500);


