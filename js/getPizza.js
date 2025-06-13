
  const API_URL = 'https://pizzaapp-jm2x.onrender.com/accounts';

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        
        const formattedData = data.map(pizza => [
            pizza.id, 
            pizza.name, 
            pizza.city, 
            pizza.state, 
            pizza.type  
        ]);

        new gridjs.Grid({
            columns: ["id", "name", "city", "state", "type"],
            data: formattedData,
            search: true,
            sort: true,
            pagination: {
                enabled: true,
                limit: 5
            },
            resizable: true,
            style: {
                table: {
                    border: "1px solid #ccc"
                },
                th: {
                    "background-color": "#f4f4f4",
                    "text-align": "left"
                },
                td: {
                    "padding": "8px",
                    "border-bottom": "1px solid #ddd"
                }
            }
        }).render(document.getElementById("grid-container"));
    })
    .catch(error => console.error('Error fetching data:', error));