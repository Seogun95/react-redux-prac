import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plusN } from './redux/modules/counter';
import { minusN } from './redux/modules/counter';

const App = () => {
  //store에 접근
  const data = useSelector((state) => {
    return state.counter;
  });

  //Dispatch 가져오기
  const dispatch = useDispatch();

  //카운트 증가 함수
  const countUpHandler = () => {
    dispatch(plusN(number));
  };

  //카운트 감소 함수
  const countDownHandler = () => {
    dispatch(minusN(number));
  };

  //input state
  const [number, setNumber] = useState(0);

  const countInputHandler = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <div>
        <h1>서근 카운트: {data.number}</h1>
        <input type="number" value={number} onChange={countInputHandler} />
        <button onClick={countUpHandler}>+</button>
        <button onClick={countDownHandler}>-</button>
      </div>
    </>
  );
};

export default App;
