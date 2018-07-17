const dev = {
    apiUrl: 'http://localhost:5000/api'
};

const prod = {
    apiUrl: '<BACKEND_URL>'
};

const config = process.env.REACT_APP_ENV === 'dev' ? dev : prod;

export default config;
