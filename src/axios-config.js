import axios from 'axios';

export default {
    http_get(url, params) {
        return axios.request({
            url,
            params,
        });
    },
};

