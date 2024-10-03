const fetchUserTasks = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = [
        { title: 'Task 1', completed: false },
        { title: 'Task 2', completed: true },
        { title: 'Task 3', completed: false }
      ];
      resolve({ user, tasks });
    }, 1000); // Simulate 1 second delay
  });
};

export { fetchData, fetchUserTasks };
