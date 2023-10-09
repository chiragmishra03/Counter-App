import { useState } from "react";
function App() {
  const [lesser, setLesser] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const minus = () => {
    if (!lesser && count === 0) {
      setText("Cannot go lesser than 0");
    } else {
      setCount(count - 1);
    }
  };
  const plus = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setText("");
    setCount(0);
    setLesser(false);
  };
  const toggleLesser = () => {
    setLesser(!lesser);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment and Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-5xl text-[#344151]">
        <button className="border-r-2 text-center w-20" onClick={minus}> - </button>
        <div className="text-center w-20">{count}</div>
        <button className="border-l-2 text-center w-20" onClick={plus}> + </button>
      </div>
      <button className="bg-[#0398d4] rounded-sm text-[white] py-2 px-2 text-2xl" onClick={reset}>Reset</button>
      <p className="text-center text-xl text-white">{text && <p>{text}</p>}</p>
      <button className={`bg-${lesser ? 'green' : 'red'} rounded-sm mt-4 text-white py-2 px-2 text-2xl`} onClick={toggleLesser}>
        {lesser ? 'Now you can go below 0' : 'Want to go below 0?'}
      </button>
    </div>
  );
}
export default App;
