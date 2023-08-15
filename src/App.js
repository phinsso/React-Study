import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

// props: 어떠한 값을 컴포넌트에 전달해줘야 할 때 사용함.

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      
      {/* name이 없는 컴포넌트(defaultProps) 렌더링 */}
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;