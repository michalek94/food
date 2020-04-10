import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer WQ7G9AHy6ehRywjpZssmT-5obHWEajRlUFJzKtdm-FbUHCb0cKSoctF2llsbirCHkZrzAb4EYuHVGcylSxSbqkZlIdFHpK3a0BbHsUq5P3w-V2OQXsQuaLou9f6OXnYx'
    }
});