import React , {useState , useEffect} from "react";
import useCounter from "./useCounter";
import NullComponent from "./NullComponent";
const MAX: number = 10;

function Accommodate() {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("==================");
    console.log("rendering");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX);
    console.log(`current count: ${count}`);
  }, [count]);

  return (
    <div style={ {padding : 16 }}>
      <p>'1 총 count :  ${count} 입니다.'</p>
      <p>' 2총 count :  ${count} 입니다.'</p>
      <NullComponent/>
      <p>' 4총 count :  ${count} 입니다.'</p>
      <p>' 5총 count :  ${count} 입니다.'</p>

      <button onClick={(event)=> increaseCount(5)}>증가</button>
      <button onClick={decreaseCount}>감소</button>

      { isFull && <p color="red">is full</p>}
      {/* UI 요소 렌더링 등 */}
    </div>
  );
}

export default Accommodate;