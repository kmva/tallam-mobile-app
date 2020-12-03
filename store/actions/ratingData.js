export const CHANGE_DATA = 'CHANGE_DATA';
export const RESET_DATA = 'CHANGE_DATA';
export const POST_DATA = 'POST_DATA';

export const changeRatingData = (criterion, value) => {
    return {type: CHANGE_DATA, criterion: criterion, value: value}
}
  
export const resetRatingData = () => {
    return {type: CHANGE_DATA}
}

export const postRatingData = (data, teacherId) => {

    // реализовать занесение оценки в БД

    return async dispatch => {
        const res = await fetch('https://tallam-fc50d.firebaseio.com/rating.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: data,
                    teacherId: teacherId
                })
            }
        );

        if(!res.ok){
            throw new Error('Error')
        }

        const resData = await res.json();
        dispatch({
            type: POST_DATA,
            ratingData: {
                data: data,
                teacherId: teacherId
            }
        });
    }
}