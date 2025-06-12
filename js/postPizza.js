document.getElementById("pizza-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    name: formData.get("name"),
    city: formData.get("city"),
    state: formData.get("state"),
    type: formData.get("type")
  };

  fetch("https://pizzaapp-jm2x.onrender.com/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (res.ok) {
      document.getElementById("result-msg").textContent = "Pizza order submitted!";
      e.target.reset();
    } else {
      document.getElementById("result-msg").textContent = "Failed to submit pizza.";
    }
  })
  .catch(err => {
    console.error("Error submitting:", err);
    document.getElementById("result-msg").textContent = "Something went wrong.";
  });
});
