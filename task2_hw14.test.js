const axios = require('axios');

async function fetchWithHeadersAndParams() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      headers: { 'Custom-Header': 'HeaderValue' },
      params: { userId: 1 }
    });
    return response;
  }

  jest.mock('axios');

  test('fetchWithHeadersAndParams should include custom headers and params', async () => {
    axios.get.mockResolvedValue({ data: [] });
    await fetchWithHeadersAndParams();
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: { 'Custom-Header': 'HeaderValue' },
        params: { userId: 1 }
      },
    )
  });