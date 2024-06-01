import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";
import { TextInput } from "./components/TextInput";
import { IconButton } from "./components/IconButton";
import { Counter } from "./components/Counter";
import { ITodo, Todo } from "./components/Todo";
import { EmptyList } from "./components/EmptyList";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodoText, setNewTodoText] = useState("");

  const todosCompleted = todos.reduce((prev, curr) => {
    if (curr.done) {
      return prev + 1;
    }
    return prev;
  }, 0);

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    if (newTodoText === "") {
      return;
    }

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        content: newTodoText,
        done: false,
      },
    ]);

    setNewTodoText("");
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTodoText(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  function deleteTodo(todoToDelete: ITodo) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoToDelete.id;
    });
    setTodos(newTodos);
  }

  function handleTodoCheck(id: string, done: boolean) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: done };
      }

      return { ...todo };
    });

    setTodos(updatedTodos);
  }

  const todosCompletedText = `${todosCompleted} de ${todos.length}`;
  const todosCreatedText = `${todos.length}`;

  return (
    <div className="bg-gray-600 pb-5">
      <Header />

      <div className="grid place-items-center -mt-7">
        <form className="space-x-3 w-[736px]" onSubmit={handleCreateNewTodo}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            value={newTodoText}
            onChange={handleNewTodoChange}
            onInvalid={handleNewTodoInvalid}
            required
          />
          <IconButton title="Criar" icon={<PlusCircle size={20} />} />
        </form>

        <div className="w-[736px] mt-12">
          <div className="flex justify-between">
            <Counter
              title="Tarefas criadas"
              textClasses="text-blue"
              counter={todosCreatedText}
            />
            <Counter
              title="Concluídas"
              textClasses="text-purple"
              counter={todosCompletedText}
            />
          </div>

          {todos.length == 0 ? (
            <EmptyList />
          ) : (
            <div className="grid place-items-center mt-6 gap-y-3">
              {todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    onDelete={deleteTodo}
                    onCheck={handleTodoCheck}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
