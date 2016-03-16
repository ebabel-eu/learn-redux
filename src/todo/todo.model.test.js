import chai from 'chai';

import Todo from './todo.model.js';

describe('todo', () => {

  let tasks;

  describe('#constructor', () => {
    it('sets an empty list of tasks when it is initialised with no parameters', () => {
      const todo = new Todo();
      const result = todo.tasks;

      chai.assert.isArray(result);
      chai.assert.equal(result.length, 0);
    })
  })

  describe('#add', () => {
    it('pushes a given task to an existing list of tasks', () => {
      const todo = new Todo();
      const task = 'align Mars with Earth to be equidistant from the Sun';

      todo.add(task);

      const taskIsFound = todo.tasks.indexOf(task) !== -1;

      chai.assert.equal(taskIsFound, true);
    })
  })

  describe('#remove', () => {
    it('removes a given tasks from the list of todo tasks', () => {
      const taskToKeep = 'invade north Africa and build a solar power plant'
      const taskToRemove = 'produce lots of cheap renewable energy';
      tasks = [
        taskToKeep,
        taskToRemove
      ];

      const todo = new Todo(tasks);

      todo.remove(taskToRemove);

      chai.assert.deepEqual(todo.tasks, [ taskToKeep ]);
    })
  })

  describe('#list', () => {

    beforeEach(() => {
      tasks = [
        'nuke the middle-east', 
        'take over the world', 
        'move Japan in orbit around the planet'
      ];
    })

    it('returns a list of todo tasks', () => {
      const todo = new Todo(tasks);
      const result = todo.list();

      chai.assert.equal(result, tasks);
    })

  })

})
