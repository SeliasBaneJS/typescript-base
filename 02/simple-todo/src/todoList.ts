// [X] Schreibe Typen zur Abbildung eines Todos
type Todo = {
    id: number;
    text: string;
    completed: boolean;
    assignedTo?: string;
    // Aufgabe 4: Neue Eigenschaft für die Priorität des Todos
    priority: number;
};

let todos: Todo[] = [];

// [X] Offene Todos ausgeben
export function getOpenTodos(): Todo[] {
    return todos.filter(todo => !todo.completed);
}

// [X] Erledigte Todos ausgeben
export function getCompletedTodos(): Todo[] {
    return todos.filter(todo => todo.completed);
}

// [X] Todos nach Priorität ausgeben
export function getTodosByPriority(): Todo[] {
    return [...todos].sort((a, b) => a.priority - b.priority);
}

// [X] Hinzufügen eines Todos
export function addTodo(text: string, priority: number): void {
    const newId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;
    const newTodo: Todo = {
        id: newId,
        text,
        completed: false,
        priority,
    };
    todos.push(newTodo);
}

// [X] Erledigen eines Todos
export function completeTodo(id: number): void {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = true;
    }
}

// [X] Zuweisen eines Todos
export function assignTodoTo(id: number, assignee: string): void {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.assignedTo = assignee;
    }
}