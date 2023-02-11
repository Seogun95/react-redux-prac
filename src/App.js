import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  //store에 접근
  const data = useSelector((state) => {
    return state.counter;
  });

  //Dispatch 가져오기
  const dispatch = useDispatch();

  //카운트 증가 함수
  const countUpHandler = () => {
    dispatch({
      type: 'PLUS_ONE',
    });
  };

  //카운트 감소 함수
  const countDownHandler = () => {
    dispatch({
      type: 'MINUS_ONE',
    });
  };

  return (
    <>
      <div>
        <h1>현재 카운트: {data.number}</h1>
        <button onClick={countUpHandler}>+</button>
        <button onClick={countDownHandler}>-</button>
      </div>
    </>
  );
};

export default App;
