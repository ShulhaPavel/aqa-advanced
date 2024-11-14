const axios = require('axios');

async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const response = await axios.get(url);
      console.log("Успешный результат запроса:", response.data); 
      return response.data;
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      return 'Error fetching data';
    }
  }

  jest.mock('axios');

test('fetchData should return data on successful request', async () => {
  const mockData = [{ id: 1, title: "Test Post" }];
  axios.get.mockResolvedValue({ data: mockData }); 

  const result = await fetchData();
  
  console.log("Результат успешного запроса в тесте:", result); 
  
  expect(result).toEqual(mockData); 
});

test('fetchData should return error message on failed request', async () => {
  const mockError = new Error("Network Error");
  axios.get.mockRejectedValue(mockError); 

  const result = await fetchData();
  
  console.log("Результат ошибки в тесте:", result); 
  
  expect(result).toBe("Error fetching data"); 
});