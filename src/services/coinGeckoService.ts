import axios from 'axios';


export const coinGeckoService = {
    async getPrice(tokenID: string): Promise<number> {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${tokenID}`);
        return response.data.market_data.current_price.usd;
    },
};

