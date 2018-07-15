const dev = {
    apiUrl: 'http://localhost:5000/api'
};

const prod = {
    apiUrl: '<BACKEND_URL>'
};

const config = process.env.REACT_APP_ENV === 'prod' ? prod : dev;

export default config;
