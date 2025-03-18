const API_URL = "http://localhost:5004/accounts/post";
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData)

    //Validate that the fields have data results
    if(data.name == "" || data.city =="" || data.state == "" || data.type == ""){
     $.toaster({priority : 'danger', title: 'Error', message : 'Oops something broke'});
    }
    else {
        fetch( API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .then(error => console.log(error))
        $.toaster({priority : 'success', title: 'Pizza Add', message : 'New Pizza Added to Library'});
    }
});