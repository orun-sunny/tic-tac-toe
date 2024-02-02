function Square({ value }) {
  return (
    <button className="bg-white border border-gray-800 h-12 w-12 m-2 leading-9 text-lg">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square value="1" />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
