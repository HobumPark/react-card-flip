import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div className="App">
        <h1>카드 뒤집기:박호범</h1>
        {/* 카드 컴포넌트를 이용해 상태값 isFlipped로 뒤집힌 상태 여부 전달 */}
        <Card setIsFlipped={setIsFlipped} isFlipped={isFlipped}/>
    </div>
  )
}

export default App;
