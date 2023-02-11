import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const data = useSelector((state) => {
    return state;
  });

  console.log('counter ->', data.counter.number);
  console.log('user ->', data.users.userId);

  return <></>;
}

export default App;
