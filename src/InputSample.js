import React, { useState } from 'react';

/* input의 onChange를 사용하면 이벤트 객체 e를 파라미터로 받아올 수 있다.
이 객체의 e.target은 이벤트가 발생한 DOM을 가리킨다.
e.target.value를 조회하면 현재 input의 value값을 알 수 있다. */
function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;