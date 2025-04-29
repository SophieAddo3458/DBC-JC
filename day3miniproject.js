const tasks = [
    { name: "Study", priority: 3 },
    { name: "Shop", priority: 1 },
    { name: "Call", priority: 2 }
  ];
  
  function createPrioritizer() {
    let counter = 0;
  
    const prioritizeTasks = (taskList, minPriority = 1) => {
      counter++;
      const filtered = taskList
        .filter(task => task.priority >= minPriority)
        .sort((a, b) => b.priority - a.priority);
  
      console.log(`Call #${counter}: Prioritized Tasks (min priority ${minPriority}):`);
      filtered.forEach(task => console.log(`- ${task.name} (priority ${task.priority})`));
    };
  
    return prioritizeTasks;
  }
  
  const prioritizeTasks = createPrioritizer();
  
 
  prioritizeTasks(tasks);
  prioritizeTasks(tasks, 2);
  prioritizeTasks(tasks, 3);
  