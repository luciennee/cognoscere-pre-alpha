var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

var parentElement = document.getElementById("parent");

if (randomNumber == 1) {
    parentElement.innerHTML += "I came, I saw, I conquered. -Julius Caesar";
    }
    if (randomNumber == 2) {
        parentElement.innerHTML += "I think, therefore I am. -René Descartes";
    }
    if (randomNumber == 3) {
        parentElement.innerHTML += "Wisdom begins in wonder. -Socrates";
    }
    if (randomNumber == 4) {
        parentElement.innerHTML += "Go forth a conquerer, and win great victories. -Virgil";
    }
    if (randomNumber == 5) {
        parentElement.innerHTML += "Practice, the master of all things. -Augustus";
    }
    if (randomNumber == 6) {
        parentElement.innerHTML += "I shall either find a way, or make one. -Hannibal";
    }
    if (randomNumber == 7) {
        parentElement.innerHTML += "He who learns must suffer. -Aeschylus";
    }
    if (randomNumber == 8) {
        parentElement.innerHTML += "Experience is the teacher of all things. -Julius Caesar";
    }
    if (randomNumber == 9) {
        parentElement.innerHTML += "Carpe Diem. -Horace";
    }
    if (randomNumber == 10) {
        parentElement.innerHTML += "Sapere Aude. -Horace";
    }
    if (randomNumber == 11) {
      parentElement.innerHTML += "Abeunt studia in mores. -Ovid";
  }
  if (randomNumber == 12) {
    parentElement.innerHTML += "Fortune favors the bold. -Terentius";
}

let output = document.getElementById("output")

function fetchData() {
    var inputValue = document.getElementById("inputbox").value;
    output.innerHTML += inputValue + "<br/>";
}

fetch("https://dummyjson.com/products/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => {
    if (res.ok) {
      console.log("Request successful");
      return res.text();
    } else {
      console.log("Request failed with status:", res.status);
    }
  })
  .then(data => {
    console.log("Response data:", data);
  })
  .catch(error => console.log("Error:", error));
