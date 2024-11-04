fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => { 
        console.log('GET Response: ', data);
    })
    .catch (error => {
        console.log('Error: ', error)
    })