import React from "react";

// Hello 컴포넌트에서 name값을 사용

// props는 객체 형태로 전달됨
/* function Hello(props) {
    return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
  } */

function Hello({color, name}) {
    // 함수의 파라미터에서 '비구조화 할당' 문법을 사용하면 코드가 간결해짐
    return <div style={{ color }}>안녕하세요 {name}</div>
}

// 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값 설정
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;