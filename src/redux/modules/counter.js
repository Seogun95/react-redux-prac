//초기 상태 값 (state)
const initialState = {
  number: 0,
};

//리듀서 : 함수
//인자를 받고 역할을 수행하는 함수

//Input : state와 action을 인자로 받는다. (기본 값)
//state의 초기값 == initialState
//action은 객체형태이며, type과 value를 가지고 있다.
//action state를 어떻게 할 것인지를 컨트롤 한다. +혹은 -?
const counter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state; //initalState 를 리턴해라
  }
};

export default counter;
