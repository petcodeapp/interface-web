import React from 'react';
import {useObserver} from 'mobx-react-lite';
import { AuthProvider, AuthContext } from './views/AuthContext';
import firebase from 'firebase';
import { auth } from './firebase/index';

const Xe = () => {
  const store = React.useContext(AuthContext);

  return useObserver(() => (
  <div>
    {
      !!store.user ? (
      <h1>{JSON.stringify(store.user)}</h1>
      ) : (<>
        <h1>hi</h1>
        <button onClick={() => {
          const goo = new firebase.auth.GoogleAuthProvider()
          auth.signInWithPopup(goo);
        }}></button>
        </>
      )
    }

  </div>))
}

function App() {
  return (
    <>
    <AuthProvider>
      <Xe />
    </AuthProvider>
    </>
  );
}

export default App;
