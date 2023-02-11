//Action value
const PLUS_N = 'PLUS_N';
const MINUS_N = 'MINUS_N';

//Action creator: action value를 return하는 함수

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: Number(payload), // 문자열로 넘어오는것을 Number로 바꿔줌
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload: Number(payload), // 문자열로 넘어오는것을 Number로 바꿔줌
  };
};

//초기 상태 값 (state)
const initialState = {
  number: 0,
};

//action 객체 라는것은 action type을 payload 만큼 처리하는것이다.
//ex: playload가 3이다. 3만큼을 증가 해라
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_N:
      return { number: state.number + action.payload };
    case MINUS_N:
      return { number: state.number - action.payload };
    default:
      return state;
  }
};

export default counter;
