import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { AuthContext } from '../../views/Auth/index';

const AdminPage = () => {
    const auth = useContext(AuthContext);

    return useObserver(() => (
        <>
            <div>Admin Page</div>
            {
                auth.isLoggedIn && (
                    <button onClick={auth.signOut}>Sign out!</button>
                )
            }

        </>
    ))
}

export default AdminPage;