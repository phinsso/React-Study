import React from "react";
import Hello from "./Hello";
import './App.css';

// JSX: 리액트에서 생김새를 정의할 때 사용하는 문법 (형태는 HTML처럼 보이지만, 자바스크립트로 이루어짐)

// JSX에서 태그에 style과 CSS class를 설정하는 방법
// 인라인 스타일은 객체 형태로 작성
// -로 구분되어 있는 요소 (background-color 등)는 camelCase 형태로 네이밍 (단어가 합쳐진 부분마다 맨 처음 글자를 대문자로 표기)

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
    {/* Fragment: 별도의 엘리먼트로 나타나지 않는 이름이 없는 태그. 불필요한 div의 사용을 줄여준다. */}
      <Hello 
        // 열리는 태그 내부 주석
      />

      {/* JSX에서 변수를 사용할 때는 {} 중괄호 안에 변수명을 넣는다. */}
      <div style={style}>{name}</div>

      {/* CSS class를 설정할 때는 className= 으로 설정한다. */}
      <div className="gray-box"></div>
    </>
  );
}

export default App;