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
});
const fetchUserTasks = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = [
        { title: 'Task 1', completed: false },
        { title: 'Task 2', completed: true },
        { title: 'Task 3', completed: false }
      ];
      resolve({ user, tasks });
    }, 1000);
  });
};

fetchData
  .then(user => {
    console.log('Fetched user data:', user);
    console.log(user.greet());
    return fetchUserTasks(user);
  })fetchData
  .then(user => {
    console.log('Fetched user data:', user);
    console.log(user.greet());
    
    return fetchUserTasks(user);
  })
  .then(result => {
    console.log('User tasks:', result.tasks);
    
    console.log('User data and tasks:');
    console.log(result.user);
    console.log(result.tasks);
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });

export { fetchData, fetchUserTasks };
