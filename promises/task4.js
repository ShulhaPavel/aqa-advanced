class TodoService {
    // Метод для выполнения запроса к /todos/1
    fetchTodo() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => { 
                console.log('GET Response:', data);
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
                throw error;
            });
    }
}

class UserService {
    fetchUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                console.log('GET Response:', data);
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
                throw error;
            });
    }

    fetchFastestResponse() {
        const todoService = new TodoService();
        const todoPromise = todoService.fetchTodo();
        const userPromise = this.fetchUser();

        return Promise.race([todoPromise, userPromise])
            .then(result => result)
            .catch(error => {
                console.error("Ошибка:", error);
            });
    }
}


const todoService = new TodoService();
const userService = new UserService();

todoService.fetchTodo().then(todo => console.log("Todo:", todo));

userService.fetchUser().then(user => console.log("User:", user));

userService.fetchFastestResponse().then(result => console.log("Fastest response:", result));