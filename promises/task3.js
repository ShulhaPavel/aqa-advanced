async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const users = await response.json();
        console.log('GET Response:', users);
    } catch (error) {
      console.error('Error:', error);
    }
}
  
getUserData()
    