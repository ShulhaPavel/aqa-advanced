async function fetchUser (){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const users = await response.json();
        console.log('GET Response:', users);
        return users;
    } catch (error) {
      console.error('Error:', error);
    }
}

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

    fetchUser()