const API_URL = "http://localhost:5004/accounts/";

function updatePizza(id, updatedData) {
    fetch(`${API_URL}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to update pizza");
        }
        return response.json();
    })
    .then(data => {
        console.log("Pizza updated successfully:", data);
        $.toaster({ priority: 'success', title: 'Pizza Update', message: 'Pizza details updated!' });

        // Refresh the grid after updating
        fetchDataAndRenderGrid();
    })
    .catch(error => {
        console.error("Error updating pizza:", error);
        $.toaster({ priority: 'danger', title: 'Error', message: 'Failed to update pizza' });
    });
}

// Example usage (update pizza with id 1)
const updatedPizzaData = {
    name: "New Pizza Name",
    city: "New City",
    state: "New State",
    type: "New Type"
};

// Call the function to update the pizza 
updatePizza(1, updatedPizzaData);
