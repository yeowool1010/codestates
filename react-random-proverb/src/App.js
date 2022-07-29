import logo from './logo.svg';
import './App.css';

function App() {

  const proverbs = [
      "돈이많은 친구들이 정이많다",
      "즐길 수 없다면 피하라",
      "늦었다고 생각 할 때가 너무 늦었다",
      "가는 말이 고우면 얕본다",
      "고생 끝에 골병 난다",
      "참을 인 세 번이면 호구",
      "티끌 모아 티끌",
      "원수는 회사에서 만난다",
      "죽음과 결혼은 뒤로 미룰수록 좋다",
      "결혼은 좋은 짝을 만나는 게 아니라 좋은 짝이 되어주는 거다"
  ]

  const getRandomProverbs = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          박명수 명언 모음
        </p>
        {proverbs[getRandomProverbs(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
