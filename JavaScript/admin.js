// Empty array to push objects into
let items = [];

// Manually created object NO!
let object1 = {
  id: 1,
  name: "John",
  description: "Kief bru",
  price: 150,
  url: "https://picjumbo.com/man-looking-at-heart-shaped-explosion/",
};

// Constructor function for newly added items
function Constructor(id, name, description, price, url) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.url = url;
}

// Declaring new item using the constructor function
let item2 = new Constructor(
  2,
  "Seth",
  "Bru like",
  220,
  "https://picjumbo.com/man-looking-at-heart-shaped-explosion/"
);

// Push objects into empty array to push to local storage
items.push(object1, item2);

localStorage.setItem("items", JSON.stringify(items));

items = JSON.parse(localStorage.getItem("items"));

let table = document.querySelector("table");

window.onload = function hello() {
  let products = items.map(function (item, index) {
    console.log(item);
    console.log(index);
    return `
  <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>R${item.price}</td>
    <td>${item.description}</td>
    <td><img src=${item.url}></td>
    <td><button>Edit</button></td>
    <td><button class="delete" value="${index}">Delete</button></td>
  </tr>`;
  });

  function remove(postion) {
    items.splice(postion, 1);
    favorite();
    hello();
  }
  let deleteButton = document.querySelector(".delete");
  table.addEventListener("click", function () {
    if (event.target.classList.contains("delete")) {
      remove(event.target.value);
    }
  });

  table.innerHTML = products.join("");
};
table.style.background = "blue";

function favorite() {
  localStorage.setItem("items", JSON.stringify(items));

  items = JSON.parse(localStorage.getItem("items"));
}

// ADD COMMENTS!!!!!

function one() {
  function two() {
    one(); //Nested Fuction

    function three(AnotherFuction) {
      AnotherFuction();
    }

    three(AnotherFuctionsName()); //Callback Fuction
  }
}
