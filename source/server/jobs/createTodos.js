import later from 'later';
import r from '../db';


const todos = [
  'Bring out the trash.',
  'Clean up lovli.js',
  'Make lovli.js even simpler.',
  'Create a short tutorial.',
  'Fix multiline-todos in lovli.',
  'Praise horizon.',
  'Build a shrine for horizon.',
  'Invest in shrimps.',
  'Watch GoT Season 6.',
  'Go out with the kids.',
  'Buy a birthday present.',
  'Clean the house.',
  'Wash the dishes.',
  'Connect horizon-react with redux.',
  'Eat some ice cream!'
];

const createRandomTodo = () => {
  const rand = Math.round(Math.random() * todos.length - 1, 0);
  r.table('todos').insert({ text: todos[rand] }).run();
};

const every2minutes = later.parse.text('every 2 minutes');

later.setInterval(createRandomTodo, every2minutes);
