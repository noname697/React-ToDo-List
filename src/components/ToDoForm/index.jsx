import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./todo-form.style.css";

export const ToDoForm = ({ onSubmit }) => {
  return (
    <form className="todo-form" action={onSubmit}>
      <TextInput
        name="description"
        required
        placeholder="Digite o item que deseja adicionar"
      />
      <Button>Salvar Item</Button>
    </form>
  );
};
