// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from '../modules/counter';
import users from '../modules/users';

const rootReducer = combineReducers({
  //이제 이 애플리케이션 전역에서 counter라는 리듀서를 쓸 수 있다.
  counter,
  users: users,
});
const store = createStore(rootReducer);

export default store;
