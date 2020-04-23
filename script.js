const todoItems = [
  {
    priority: 3,
    task: 'clean'
  },
  {
    priority: 1,
    task: 'wash car'
  },
  {
    priority: 4,
    task: 'laundry'
  },
  {
    priority: 2,
    task: 'cook'
  }
];

const list = document.getElementById('list');

todoItems.sort((a,b) => {
  if (a.priority < b.priority) {
    return -1;
  }

  return 1;
}).map(item => {
  const listItem = document.createElement('div');
  listItem.innerHTML = (
    '<p>' + item.task + '<p>'
  );
  list.appendChild(listItem);
});

function test() {
  console.log('TEST');
}

// test();

console.log('default');
