import React from 'react';
// arr.map(i => ) 의 형태로 하위 컴포넌트에게 값을 전달해준다.
// 리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야 함.

/* Map에 key 값이 없다면 중간의 값이 바뀌었을 때 그 하위 값들이 전부 변하게 된다.
key값을 사용한다면 key를 이용해 중간의 값을 추가하게 된다.*/

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;