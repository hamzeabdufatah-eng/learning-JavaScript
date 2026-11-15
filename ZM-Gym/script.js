const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".main-nav a");
const menuIcon = menuToggle.querySelector("span");
menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  if (mainNav.classList.contains("active")) {
    menuIcon.textContent = "X";
    menuToggle.setAttribute("aria-label", "Close menu");
  } else {
    menuIcon.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("active");
    menuIcon.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});
// WORKOUT FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const workoutCards = document.querySelectorAll(".workout-card");
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // get selected category
    const selectedFitler = button.dataset.filter;
    // change active button
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    // filter workout card
    workoutCards.forEach(function (card) {
      const cardCategory = card.dataset.category;
      if (selectedFitler === "all" || cardCategory === selectedFitler) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
// Products
const products = [
  {
    id: 1,
    image: "./images/Dumbbels.jpg",
    categories: "dumbells",
    price: 17000,
  },
  {
    id: 2,
    image: "./images/Barbells.jpg",
    name: "Barbells",
    categories: "Barbells",
    price: 19000,
  },
  {
    id: 3,
    image: "./images/Adjustable bench.jpg",
    name: "Bench",
    categories: "Benches",
    price: 2000,
  },
  {
    id: 4,
    image: "./images/Creatine-mono2.jpg",
    name: "Machines",
    categories: "Machines",
    price: 14000,
  },
  {
    id: 5,
    image: "./images/Cardio.jpg",
    name: "Cardio",
    categories: "Cardio",
    price: 12000,
  },
  {
    id: 6,
    image: "./images/Accessories.jpg",
    name: "Accessories",
    categories: "Accessories",
    price: 11000,
  },
];
const productsContainer = document.getElementById("productsContainer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.querySelector(".cart-count");
const cartButton = document.querySelector(".cart-link");
const cartPanel = document.querySelector(".cart-panel");
const closeCart = document.getElementById("closeCart");
// function displayProducts() {
//   productsContainer.innerHTML = products
//     .map((product) => {
//       return `
//   <div class="products-card">
//    <div class="product-image">
//     <span class="product-badge">New</span>
//     ${product.image ? `<img src="${product.image}" alt="${product.name}">` : ""}
//   </div>
//  <div class="product-info">
//     <span class="product-category">${product.categories}</span>
//     <h3>${product.name}</h3>
//     <div class="product-bottom">
//       <span class="product-price">${product.price}</span>
// <button class="add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
//   </div>
//   </div>
//   </div>
//   `;
//     })
//     .join("");
// }
// displayProducts();
// let cart = JSON.parse(localStorage.getItem("productCart")) || [];

// function addToCart(productId) {
//   const product = products.find((product) => product.id === productId);
//   const existingItem = cart.find((item) => item.product.id === productId);
//   if (existingItem) {
//     existingItem.qunatity++;
//   } else {
//     cart.push({
//       product: product,
//       qunatity: 1,
//     });
//     // localStore()
//   }
//   function localStore() {
//     localStorage.setItem("productCart", JSON.stringify(cart));
//   }
//   updateCart();
// }
// function updateCart() {
//   cartItems.innerHTML = cart
//     .map((item, index) => {
//       return `
//             <div class="cart-items-card">
//           <div class="cart-items-image">
//           ${item.product.image ? `<img src="${item.product.image}" alt="${item.product.name}">` : ""}
//            </div>
//           <div class="cart-items-content">
//           <h3>${item.product.name}</h3>
//           <span>${item.product.price}:ETB</span>
//           <div class="cart-items-button">
//           <button class="decreasebtn" onclick="decreaseQuantity(${index})">-</button>
//            <span>${item.qunatity}</span>
//          <button class="increasebtn" onclick="increaseQuantity(${index})">+</button>
//          </div>
//          <button class="removeBtn" onclick="removeFromCart(${index})">Remove</button>
//          </div>
//           </div>
//           `;
//     })
//     .join("");
//   const total = cart.reduce(
//     (sum, item) => sum + item.product.price * item.qunatity,
//     0,
//   );
//   cartTotal.textContent = total;
//   cartCount.textContent = cart.reduce((sum, item) => sum + item.qunatity, 0);
// }
// // AddToCart()
// cartButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   cartPanel.classList.add("active");
// });
// function increaseQuantity(index) {
//   cart[index].qunatity++;
//   updateCart();
// }
// function removeFromCart(index) {
//   cart.splice(index, 1);
//   updateCart();
// }
// function decreaseQuantity(index) {
//   if (cart[index].qunatity > 1) {
//     cart[index].qunatity--;
//   }
//   updateCart();
// }
// closeCart.addEventListener("click", () => {
//   cartPanel.classList.remove("active");
// });
// BMI calculating
const bmiBtn = document.getElementById("bmiBtn");
const inputHieght = document.getElementById("hieght");
const inputWeight = document.getElementById("weight");
const calculateBmi = document.getElementById("calculateBmi");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");

let value = 0;
calculateBmi.addEventListener("click", function () {
  const height = Number(inputHieght.value);
  const weight = Number(inputWeight.value);
  // check inputs;
  if (height <= 0 || weight <= 0) {
    bmiValue.textContent = "0";
    bmiCategory.textContent = "Enter valid details";
    return;
  }
  // convert hieght from cm to meters
  const hieghtInMeters = height / 100;
  // BMI formula
  const bmi = weight / (hieghtInMeters * hieghtInMeters);
  // show bmi
  bmiValue.textContent = bmi.toFixed(1);
  // determine category
  let color;
  if (bmi < 18.5) {
    bmiCategory.textContent = "Underweight";
    color = "red";
  } else if (bmi < 25) {
    bmiCategory.textContent = "Normal";
    color = "green";
  } else if (bmi < 30) {
    bmiCategory.textContent = "Overweight";
    color = "Orange";
  } else {
    bmiCategory.textContent = "Obesity";
    color = "red";
  }
  bmiCategory.style.color = color;
  bmiValue.style.color = color;
});
