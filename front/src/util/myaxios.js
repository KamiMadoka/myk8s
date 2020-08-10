import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:2234/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});

const commonFunc = (method, url, params) => {
    let config = {
        method,
        url
    }
    method === 'post' ? config.data = params : config.params = params;
    return instance(config).then(res => {
        return Promise.resolve(res.data);
    }).catch(err => {
        return Promise.reject(err);
    })
};

const myaxios = {
    'get': (url, params) => commonFunc('get', url, params),
    'patch': (url, params) => commonFunc('patch', url, params),
    'delete': (url, params) => commonFunc('delete', url, params),
    'post': (url, params) => commonFunc('post', url, params)
};

export default myaxios;