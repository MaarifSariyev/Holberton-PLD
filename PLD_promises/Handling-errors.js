import fetchData from 'promise-based-function';

fetchData const API = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

const isDataAvailable = false;

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isDataAvailable) {
      resolve(API);
    } else {
      reject(new Error('Data is not available'));
    }
  }, 2000);
});

export default fetchData;
