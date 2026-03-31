import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 5,
    duration: '10s'
};

export default function () {
    http.get('https://dummyjson.com/products');
    sleep(1);
}