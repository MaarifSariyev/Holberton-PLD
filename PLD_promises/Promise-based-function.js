API = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};
const fetchData = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(API);
  }, 2000)
});
fetchData
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

export default fetchData;
