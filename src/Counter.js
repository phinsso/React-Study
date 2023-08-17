import React, { useState } from 'react';
// 리액트 패키지에서 useState 함수를 불러와줌.

// state: 컴포넌트에서 동적인 값을 부르는 말
// useState(): 컴포넌트에서 상태 관리 가능한 함수

function Counter() {
    const [number, setNumber] = useState(0);
    // 상태의 기본값을 파라미터로 넣음.

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
      }
    
      const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
      }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            {/* 엘리먼트에 이벤트 설정 형식: on이벤트이름 = {실행하고 싶은 함수} */}
        </div>
    );
}

export default Counter;