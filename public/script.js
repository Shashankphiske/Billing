

const menuItems = [
  {
    category: 'Vadapav',
    items: [
      { id: 1, name: 'Vadapav', price: 15 },
      { id: 2, name: 'Hatke Masala Vadapav', price: 15 },
      { id: 3, name: 'Hatke Jumbo Vadapav', price: 20 },
      { id: 4, name: 'Hatke Tandoori Vadapav', price: 24 },
      { id: 5, name: 'Hatke Peri Peri Vadapav', price: 24 },
      { id: 6, name: 'Hatke Janjhanit Vadapav', price: 24 },
      { id: 7, name: 'Hatke Cheese & Onion Vadapav', price: 24 },
      { id: 8, name: 'Hatke VIP Vadapav', price: 24 },
      { id: 9, name: 'Sabudana Vada (2 Piece)', price: 30 }
    ]
  },
  {
    category: 'Tea',
    items: [
      { id: 10, name: 'Chocolate Tea', price: 15 },
      { id: 11, name: 'Lemon Tea', price: 10 },
      { id: 12, name: 'Hot Coffee', price: 15 },
      { id: 13, name: 'Elaichi Tea', price: 10 },
      { id: 14, name: 'Masala Tea', price: 10 },
      { id: 15, name: 'Jaggery Tea', price: 10 }
    ]
  },
  {
    category: 'Momos',
    items: [
      { id: 16, name: 'Fried Veg Momos (5 Piece)', price: 59 },
      { id: 17, name: 'Fried Paneer Momos (5 Piece)', price: 79 }
    ]
  },
  {
    category: 'Shakes & Coolers',
    items: [
      { id: 18, name: 'Oreo Shake', price: 59 },
      { id: 19, name: 'Cold Coffee', price: 49 },
      { id: 20, name: 'Kit Kat Shake', price: 69 },
      { id: 21, name: 'Mojito', price: 39 },
      { id: 22, name: 'Jeera', price: 39 },
      { id: 23, name: 'Kacchi Kairi', price: 39 },
      { id: 24, name: 'Orange', price: 39 },
      { id: 25, name: 'Kala Khata', price: 39 }
    ]
  },
  {
    category: 'Pizzas',
    items: [
      { id: 26, name: 'Corn Pizza', price: 105 },
      { id: 27, name: 'Paneer Pizza', price: 109 },
      { id: 28, name: 'Italian Pizza', price: 115 },
      { id: 29, name: 'Veg Pizza', price: 99 }
    ]
  },
  {
    category: 'Burgers',
    items: [
      { id: 30, name: 'Veg Burger', price: 45 },
      { id: 31, name: 'Mexican Burger', price: 45 },
      { id: 32, name: 'Tandoori Burger', price: 45 },
      { id: 33, name: 'Spicy Burger', price: 45 },
      { id: 34, name: 'Chatpata Burger', price: 45 },
      { id: 35, name: 'Cheese & Onion Burger', price: 45 },
      { id: 36, name: 'Peri Peri Burger', price: 45 },
      { id: 37, name: 'Italian Burger', price: 45 },
      { id: 38, name: 'Corn Burger', price: 49 },
      { id: 39, name: 'Paneer Masala Burger', price: 65 },
      { id: 40, name: 'Cheese Corn Burger', price: 65 },
      { id: 41, name: 'Crispy Burger', price: 49 }
    ]
  },
  {
    category: 'Combos',
    items: [
      { id: 42, name: '2 Burger + Fries', price: 119 },
      { id: 43, name: 'Burger + Fries + Mojito', price: 115 },
      { id: 44, name: 'Pri Peri Tikki + Peri Peri Fries', price: 69 },
      { id: 45, name: 'Crispy Pri Peri Tikki + Fries + Mojito', price: 99 },
      { id: 46, name: '2 Crispy Burger + Fries', price: 129 }
    ]
  },
  {
    category: 'Specials',
    items: [
      { id: 47, name: 'Hatke Crispy Peri Peri', price: 29 },
      { id: 48, name: 'Hatke Special Crispy', price: 35 },
      { id: 49, name: 'Hatke Hara Bara', price: 29 },
      { id: 50, name: 'Hatke Corn Palak', price: 35 },
      { id: 51, name: 'Hatke Spicy Schezwan', price: 29 },
      { id: 52, name: 'Hatke Cheese Corn', price: 45 },
      { id: 53, name: 'Hatke Paneer Masala', price: 45 }
    ]
  },
  {
    category: 'Fries',
    items: [
      { id: 54, name: 'Salted French Fries', price: 49 },
      { id: 55, name: 'Peri Peri Fries', price: 59 },
      { id: 56, name: 'Chilly Chatpata Fries', price: 59 }
    ]
  }
];

const cart = [];

function addToCart(itemId, quantity) {
  for (const category of menuItems) {
    const selectedItem = category.items.find(item => item.id === itemId);
    if (selectedItem) {
      for (let i = 0; i < quantity; i++) {
        cart.push(selectedItem);
      }
      console.log(`Item "${selectedItem.name}" added to cart`);
      updateCartDisplay();
      // Disable the "Add to Cart" button after adding the item
      const addButton = document.getElementById(`addButton_${itemId}`);
      addButton.textContent = "Added";
      addButton.disabled = true;
      return;
    }
  }
  console.error(`Item with ID ${itemId} not found`);
}



function calculateTotalAmount() {
  let total = 0;
  cart.forEach(item => {
    total += item.price;
  });
  return total;
}

function updateCartDisplay() {
  const cartSection = document.getElementById('cart');
  cartSection.innerHTML = '<h2>Cart</h2>';
  let total = 0;
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.name} - ₹${item.price}`;
    cartSection.appendChild(cartItem);
    total += item.price;
  });
  const totalPrice = document.createElement('div');
  totalPrice.textContent = `Total: ₹${total}`;
  cartSection.appendChild(totalPrice);

  const paymentModes = document.createElement('div');
  paymentModes.innerHTML = `
    <label><input type="radio" name="paymentMode" value="cash"> Cash</label>
    <label><input type="radio" name="paymentMode" value="online"> Online/UPI</label>
  `;
  cartSection.appendChild(paymentModes);

  const checkoutButton = document.createElement('button');
  checkoutButton.textContent = 'Proceed to Checkout';
  checkoutButton.addEventListener('click', () => {
    console.log('Proceed to checkout button clicked');
    const selectedPaymentMode = document.querySelector('input[name="paymentMode"]:checked');
    if (!selectedPaymentMode) {
      alert('Please select a payment mode');
      return;
    }
    const paymentMode = selectedPaymentMode.value;
    const totalAmount = calculateTotalAmount();
    console.log(`Proceeding to checkout with payment mode: ${paymentMode}`);
    placeOrder(totalAmount, paymentMode);
  });
  cartSection.appendChild(checkoutButton);
}

function displayMenu() {
  const menuSection = document.getElementById('menu');
  menuItems.forEach(category => {
    const categoryHeading = document.createElement('h3');
    categoryHeading.textContent = category.category;
    menuSection.appendChild(categoryHeading);

    category.items.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.textContent = `${item.name} - ₹${item.price}`;
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.min = 1;
      quantityInput.value = 1;
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(item.id, quantity);
      });
      menuItem.appendChild(quantityInput);
      menuItem.appendChild(addButton);
      menuSection.appendChild(menuItem);
    });
  });
}
window.onscroll = function() {
    var cartButton = document.getElementById("cart-button");
    var cartSection = document.getElementById("cart");
    var checkoutButton = document.getElementById("checkout");

    // Calculate the position to show the cart button
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var cartSectionTop = cartSection.offsetTop;
    var cartSectionHeight = cartSection.offsetHeight;
    var checkoutButtonHeight = checkoutButton.offsetHeight;
    var windowHeight = window.innerHeight;

    if (scrollTop + windowHeight >= cartSectionTop + cartSectionHeight + checkoutButtonHeight + 40) {
        cartButton.style.display = "block";
    } else {
        cartButton.style.display = "none";
    }
};

async function placeOrder(totalAmount, paymentMode) {
  const orderItems = cart.map(item => item.name).join(', ');
  try {
    const response = await fetch('/placeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderItems, totalAmount, paymentMode }),
      
    });
    const responseText = await response.text();
    console.log(responseText);

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      alert('Order placed successfully!');
      var printContents = document.getElementById('cart').innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      cart.length = 0;
      updateCartDisplay();
      // Reset display to show menu section and hide cart section
      document.getElementById('cart').style.display = 'none';
      document.getElementById('menu').style.display = 'block';
      location.reload();
    } else {
      alert('Failed to place order. Please try again.');
    }
  } catch (error) {
    console.error('Error placing order:', error);
    alert('Error placing order. Please try again.');
  }
}


window.onload = function() {
  displayMenu();
  updateCartDisplay();

  const cartButton = document.getElementById('cart-button');
  const cartSection = document.getElementById('cart');
  const menuSection = document.getElementById('menu');

  cartButton.addEventListener('click', function() {
    // Toggle visibility of cart section
    if (cartSection.style.display === 'block') {
      cartSection.style.display = 'none';
    } else {
      cartSection.style.display = 'block';
    }



    // Hide menu section when cart is displayed
    menuSection.style.display = 'none';
  });
};

