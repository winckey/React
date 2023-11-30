import React , {useState}  from "react";

function useCounter(initalValue : number) : [number , ( a : number )=>void ,()=>void ]  {
    const [count , setCount] = useState<number>(initalValue);

    const increaseCount = (test : number) => setCount(count +1);
    const decreaseCount = () => setCount(count -1);
    
    return [count , increaseCount , decreaseCount] ;
}

export default useCounter;