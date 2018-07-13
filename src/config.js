const dev = {
    apiUrl: 'http://localhost:5000'
};

const prod = {
    apiUrl: 'https://somewhere.com'
};

const config = process.env.REACT_APP_ENV === 'prod' ? prod : dev;

export default config;
