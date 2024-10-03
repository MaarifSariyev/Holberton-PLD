class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`;
  }
}
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(new User('John Doe', 30, 'New York'););
    }
  }, 2000);
});//3.1 task

fetchData
  .then(user => {
    console.log('Fetched user data:', user);
    console.log(User.greet());
  })//3.2task

export default fetchData;
