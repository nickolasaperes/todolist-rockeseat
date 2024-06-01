import clipboardIcon from "../assets/clipboard.svg";

export function EmptyList() {
  return (
    <div>
      <div className="border-b border-b-gray-400 mt-6"></div>
      <div className="grid place-items-center py-16">
        <img src={clipboardIcon} />
        <span className="mt-4 text-gray-300 font-bold text-base">
          Você ainda não tem tarefas cadastradas
        </span>
        <span className="text-gray-300 text-base">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  );
}
