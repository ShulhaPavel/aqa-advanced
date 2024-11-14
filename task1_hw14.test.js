const axios = require('axios');

async function fetchInvalidUrl() {
  try {
    await axios.get('https://qauto.forstudy.sp');
  } catch (error) {
    return 'Error: Invalid URL';
  }
}

test('fetchInvalidUrl should return error message for invalid URL', async () => {
  const result = await fetchInvalidUrl();
  console.log(result);
  expect(result).toBe('Error: Invalid URL');
});