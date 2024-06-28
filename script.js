const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sanfrancisco&format=json&u=f';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'c01d84c9c3msh2e0bab01677599ap1e9d65jsn235fd9c6dfe6',
    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
  }
};

async function getWeather() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
getWeather();


