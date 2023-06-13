import React, { useEffect } from 'react'
import useLog from '../hook/useLog'

export default function TestBox() {
  // 컴포넌트가 생성될때마다 실행할 useEffect
  // ex) firebase의 값을 가져오는 일,
  //     생성될 때 마다 값이 출력
  useLog();

  return (
    <div>
        TestBox
    </div>
  )
}
