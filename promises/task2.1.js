const fetchUser = () => fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
        console.log('GET Response:', data);
        return data;
    })
    .catch(error => {
        console.log('Error:', error);
        throw error;
    });


const userPromises = [fetchUser(), fetchUser(), fetchUser()];

Promise.all(userPromises)
    .then(results => {
        console.log('Promise.all results:', results);
    })
    .catch(error => {
        console.log('Promise.all error:', error);
    });

Promise.race(userPromises)
    .then(result => {
        console.log('Promise.race result:', result);
    })
    .catch(error => {
        console.log('Promise.race error:', error);
    });