import { auth, googleAuthProvider } from '../../firebase/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT',
})

export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            const token = result.user.accessToken;
            const user = result.user;
            return user;
            // console.log(result);
            // console.log(token);
            // console.log(user);
        }).catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(err);
            console.log(errorCode);
            console.log(errorMessage);
        })
    }
}

export const startLogout = () => {
    return () => {
        return signOut(auth)
        .then(() => console.log('Log-out successful'))
        .catch((error) => console.log('An error happened'));
    }
}