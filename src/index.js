import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Provider import
//주의: 반드시 config에서 가져와야 한다. 정확한 경로 필수
//tip: export default로 작성했을때는 import시 { store }로 작성하면 안된다.
import store from './redux/config/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Provider:
  //스토어에서 만들어놓은 중앙데이터 관리소를 App 컴포넌트 하부에서 스토어를 가능하게 해줌
  <Provider store={store}>
    <App />
  </Provider>
);
