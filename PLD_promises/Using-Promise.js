import fetchData from 'promise-based-function';

fetchData
  .then(data => {
    console.log('Fetched user data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
