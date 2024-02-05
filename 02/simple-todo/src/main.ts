import { addTodo, assignTodoTo, completeTodo, getOpenTodos, getCompletedTodos, getTodosByPriority } from './todoList';

// Alle offenen Todos ausgeben
console.log('Offene Todos:', getOpenTodos());

// Mehrere Todos hinzufügen
addTodo('Todos erstellen', 2);
addTodo('Auto tanken', 2);
addTodo('Über Benzinpreise fluchen', 3);

// Alle offenen Todos ausgeben
console.log('Offene Todos nach Hinzufügen:', getOpenTodos());

// Ein Todo jemandem zuweisen
assignTodoTo(1, 'Jakob');

// Ein Todo erledigen
completeTodo(1);

// Alle erledigten Todos ausgeben
console.log('Erledigte Todos:', getCompletedTodos());

// Todos nach Priorität anzeigen
console.log('Todos nach Priorität:', getTodosByPriority());