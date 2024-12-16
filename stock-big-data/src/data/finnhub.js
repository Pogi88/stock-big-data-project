const axios = require('axios');

const FINNHUB_API_KEY = 'ct9m1vpr01quh43od6sgct9m1vpr01quh43od6t0';
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

// Fetch real-time stock data for multiple symbols
async function fetchRealTimeData(symbols) {
    try {
        const promises = symbols.map(async (symbol) => {
            const url = `${FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;
            const response = await axios.get(url);
            return { symbol, ...response.data }; // Attach symbol to the data
        });

        const results = await Promise.all(promises);
        return results; // Return an array of results
    } catch (error) {
        console.error('Error fetching data from Finnhub:', error.message);
        throw error;
    }
}

module.exports = {
    fetchRealTimeData,
};