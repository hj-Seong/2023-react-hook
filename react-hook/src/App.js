import './App.css';
import { useCallback, useMemo, useState } from 'react'

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
  const memoTakeWord = useMemo(()=>takeWord(name), [name])

  // useCallback 컴포넌트 자체가 생성될때 함수 새로 만듦
  // 그때 값이 바뀌지않았다면 함수를 만들지 않도록 함
  // 함수를 만들지 않는다는 것은 이전에 썼던 값을 그대로 쓴다
  // *매개변수로 들고오는 값은 바뀌지만, 
  // 안에서 외부에서 가져와 쓴 값은 바뀌지않는다

  // useCallback(()=>{함수},[의존할 값] )
  const onChange = useCallback((e)=>{
    // 매개변수로 들고오는 값은 바뀜
    setInput(e.target.value);

    // 안(callback)에서 외부(state 또는 글로벌 변수)에서 가져와 쓴 값은 바뀌지않는다
    // 처음에 들어가있는 input값 undefind 출력
    // console.log(input);

    // 가져온 state값이 바뀔때 그 값을 사용하고 싶다면
    // []에 원하는 state값이나 props 값을 넣어서 사용
    console.log(name);
  },[name])

  // onClick을 useCallback으로 작성하세요
  const onClick = useCallback(()=>{},[])


  return (
    <div className="App">
      <h3>{input}</h3>

      <input type='text' 
        onChange={onChange}
        />
      <button onClick={()=>{setName(input)}}>확인</button>
      <p>이름의 길이:{memoCountName}</p>
      <p>{memoTakeWord}</p>

    </div>
  );
}

export default App;
