import http from 'k6/http';
import { sleep, check } from 'k6';

// Test configuration
export let options = {
    stages: [
        { duration: '10s', target: 10 }, // Ramp-up to 10 users
        { duration: '20s', target: 50 }, // Increase load to 50 users
        { duration: '20s', target: 100 }, // Peak load
        { duration: '10s', target: 0 },  // Ramp-down
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% requests < 500ms
        http_req_failed: ['rate<0.01'],   // Fail rate < 1%
    },
};

export default function () {
    let res = http.get('https://dummyjson.com/products');

    // Validate response
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1); // simulate user thinking time
}