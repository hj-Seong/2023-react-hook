import './App.css';
import { useMemo, useState } from 'react'

function App() {
  // onChange와 연결 되어있는 값은 바로 사용하기보단 : 연결된 값은 언제든지 바뀔수있는값
  // 완전히 결정됬을때 사용하는 값을 따로 두어서 쓰기 : name
  const [input, setInput] = useState();

  // input의 값을 확인 버튼을 눌렀을때 가져옴
  const [name , setName] = useState("");
  
  // name 값을 가져와서 name의 길이를 출력하는(return) 함수
  const countName = (name) => {
    console.log("이름의 길이를 계산하는 중입니다");
    return name.length;
  }
  // return html에 바로 사용되는 함수의 값을 고정해서 쓰기위해
  // useMemo 사용
  // ()=>함수 : 형태를 사용해서 함수의 값 return
  // useMemo( ()=>함수, [의존할 값(state, props)] )
  const memoCountName = useMemo( ()=>countName(name), [name] )

  // 첫번째 글자만 가져오는 함수
  const takeWord = (name) => {
    console.log("글자의 첫번째 문자를 들고 오는 중입니다");
    return name[0];
  }
  // useMemo를 통해서 name값이 바뀔때만 실행할 수 있게 


  return (
    <div className="App">
      <h3>{input}</h3>

      <input type='text' 
        onChange={(e)=>{setInput(e.target.value)}}
        />
      <button onClick={()=>{setName(input)}}>확인</button>
      <p>이름의 길이:{memoCountName}</p>
      <p>{takeWord("홍길동")}</p>

    </div>
  );
}

export default App;