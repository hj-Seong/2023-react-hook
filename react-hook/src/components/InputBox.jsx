import React, { useState } from 'react'
import { useFormInput } from '../hook/useFormInput'

export default function InputBox() {
  // 이름 받아오는 useFormInput
  const nameProps = useFormInput("");
  // 전화번호 받아오는 useFromInput
  const phoneProps = useFormInput("");

  // 다양한값 확인
  const textProps = useFormInput("");
  const emailProps = useFormInput("");
  const dateProps = useFormInput("");

  // 확정된 이름을 기록하는 state
  const [name, setName] = useState("");

  // 클릭했을때 이름값을 저장하는 함수
  const addName = () => {
    setName(nameProps.value);
  }

  // useState나 props값이 아닌 컴포넌트 안의 변수
  // 값이 수정된 값으로 고정되지 않고 (렌더/리렌더시 let testNum = 1; 실행)
  // 화면에 바뀐 값이 출력이 되지 않으면서 (값이 바뀌어도 렌더/리렌더X)
  // 렌더/리렌더 되면 다시 1이 된다
  // 컴포넌트 안에서 순수한 변수값(1, [1,2])은 잘 쓰지않는다
  let testNum = 1;
  
  // State나, props의 값을 수정, 일부분의 내용을 가져올때 사용
  const nameLength = name.length;

  return (
    <div>
        <label htmlFor="">
            이름 : 
            <input {...nameProps} />
        </label>
        <br />
        <label htmlFor="">
            전화번호 :
            <input type="text" {...phoneProps} />
        </label>
        <br />
        <button onClick={ addName }>확인</button>
        <p>이름 : {name} </p>

        {/** useFormInput 을 사용하여 아래 태그의 값을 가져오세요 */}
        <textarea {...textProps } cols="30" rows="10"></textarea>
        <input {...emailProps } type="email"  /><br />
        <input {...dateProps } type="date" />
        <p>{textProps.value}</p>
        <p>{emailProps.value}</p>
        <p>{dateProps.value}</p>
    </div>
  )
}
