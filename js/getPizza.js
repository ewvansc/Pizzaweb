fetch("https://pizzaapp-jm2x.onrender.com/accounts")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("pizza-grid");

    data.forEach(pizza => {
      const div = document.createElement("div");
      div.className = "pizza-card";
      div.innerHTML = `
        <h3>${pizza.name}</h3>
        <p>${pizza.city}, ${pizza.state}</p>
        <p>Type: ${pizza.type}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Error loading pizza data:", err));

