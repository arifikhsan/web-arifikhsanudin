let now = new Date();

// top header
let greeting = "";

if (now.getHours() < 12) {
  greeting = "Good Morning!   ヾ(•ω•`)o`";
} else if (now.getHours() < 15) {
  greeting = "Good afternoon!   ( •̀ ω •́ )✧";
} else if (now.getHours() < 21) {
  greeting = "Good evening!   (o゜▽゜)o☆";
} else {
  greeting = "Good night!   (✿◡‿◡)";
}

let divTime = document.getElementById("time");
let pGreeting = document.createElement("p");
let pTime = document.createElement("p");

pGreeting.innerHTML = greeting;
divTime.appendChild(pGreeting);


// footer
let footer = document.getElementsByTagName("footer")[0];

let spanYear = document.createElement("span");
spanYear.innerHTML = now.getFullYear();
footer.appendChild(spanYear);
