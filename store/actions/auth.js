export const SIGNIN = 'SIGNIN';
export const SET_SIGNIN_DATA = 'SET_SIGNIN_DATA';
export const LOGOUT = 'LOGOUT';

export const signin = (email, password) => {
    // реализовать авторизацию на основе данных пользователей из БД
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
            const errorResData = await res.json();
            const errorId = errorResData.error.message;
            let errorMessage = "Произошла ошибка";
            if(errorId === 'EMAIL_NOT_FOUND') {
                errorMessage = 'Неправильный email'
            } else if (errorId === 'INVALID_PASSWORD') {
                errorMessage = 'Неправильный пароль'
            }

            throw new Error(errorMessage);
        }

        const resData = res.json();
        dispatch({type: SIGNIN});
    }
};

export const setSigninData = (field, value) => {
    return {type: SET_SIGNIN_DATA, field, value};
}

export const logout = () => {
    return {type: LOGOUT};
}