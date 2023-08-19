import React, { useRef } from 'react';
import UserList from './UserList';

/* useRef의 또 다른 역할
    - 컴포넌트 안에서 조회 및 수정 할 수 있는 변수 관리
    - useRef로 관리되는 변수는 값이 바뀌어도 컴포넌트가 리렌더링 되지 않는다.*/

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;