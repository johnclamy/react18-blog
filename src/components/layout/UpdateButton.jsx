const UpdateButton = ({ onAddCurrentTodo, onEmptyEditedTodo }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onAddCurrentTodo();
    onEmptyEditedTodo();
  };

  return (
    <button
      className="bg-green-900 hover:bg-green-400 text-white font-semibold uppercase text-lg p-2 rounded"
      type="submit"
      onClick={handleClick}
    >
      edit todo
    </button>
  );
};

export default UpdateButton