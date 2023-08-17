import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

// 조건부 렌더링: 특정 조건에 따라 다른 결과물을 렌더링하는 것

function App() {
  return (
    <Wrapper>
      {/* props 이름만 작성하고 값 설정 생략 => true 설정으로 간주
          ex) <Hello name="react" color="red" isSpecial />*/}
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;