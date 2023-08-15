import React from 'react';

// 컴포넌트 태그 사이에 넣은 값을 조회할 때 props.children 사용
function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;
