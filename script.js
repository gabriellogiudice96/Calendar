const date = document.getElementById("date"); 
const day = document.getElementById("day"); 
const month = document.getElementById("month"); 
const year = document.getElementById("year"); 

// const hour = document.getElementById("hour");
// const min = document.getElementById("minutes");
// const sec = document.getElementById("seconds");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths = ["January", "February", "March",  "April", "May", "June", "July", "August","September","October","November","December"];

// let hours = today.getHours();
// let minutes = today.getMinutes();
// let seconds = today.getSeconds();

// hour.innerHTML = hours;
// sec.innerHTML = (today.getSeconds()<10?"0":"")+ today.getSeconds();
// min.innerHTML = (today.getMinutes()<10?"0":"")+ today.getMinutes();
date.innerHTML = (today.getDate()<10?"0":"")+ today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()]; 
year.innerHTML = today.getFullYear();
