// src/components/TestUserAtom.js
import React from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms/userAtom';

const TestUserAtom = () => {
  const [user, setUser] = useAtom(userAtom);

  return (
    <div>
      <p>User: {user ? user.name : 'No user set'}</p>
      <button onClick={() => setUser({ name: 'Test User' })}>
        Set User
      </button>
    </div>
  );
};

export default TestUserAtom;