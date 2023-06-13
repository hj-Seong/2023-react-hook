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
