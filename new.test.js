const axios = require('axios');


describe('JSONPlaceholder', () => {

    test("Get correct API test", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', { 
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(200); 
    })

    test("Get incorrect API test", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/post/1', { 
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(200); 
    })

    test("Get incorrect status code", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/post/1', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(201); 
    })

    test("Create new post successfully", async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            "title": "new title",
            "body": "There is a new description in test",
            "userId": 222,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(201); 
    })

    test("Create new inccorect post", async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            "title": "new title",
            "body": "There is a new description in test",
            "userId": 222,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(200); 
    })

})

