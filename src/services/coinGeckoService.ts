import axios from "axios";
import { appLogger } from "../utils/method";

export const coinGeckoService = {
  async getPrice(tokenID: string): Promise<number> {
    const response = await axios
      .get(`https://api.coingecko.com/api/v3/coins/${tokenID}`)
      .then((response) => response.data)
      .catch((error) => appLogger("[CoinGecko]", "Req error :", error));
    return response.market_data.current_price.usd;
  },
};
