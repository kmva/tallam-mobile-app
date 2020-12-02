export const SIGNIN = 'SIGNIN';
export const SET_SIGNIN_DATA = 'SET_SIGNIN_DATA';

export const signin = (email, password) => {
    return async dispatch => {
        const res = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsfwGRF-sUccQnr--v5UqCeNNoe_psICs',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        );

        if(!res.ok){
            throw new Error('Error')
        }

        const resData = res.json();
        console.log(resData);
        dispatch({type: SIGNIN});
    }
};

export const setSigninData = (field, value) => {
    return {type: SET_SIGNIN_DATA, field, value};
}