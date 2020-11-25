export const CHANGE_DATA = 'CHANGE_DATA';

export const changeRatingData = (criterion, value) => {
    return {type: CHANGE_DATA, criterion: criterion, value: value}
}
  
export const RESET_DATA = 'CHANGE_DATA';

export const resetRatingData = () => {
    return {type: CHANGE_DATA}
}

export const POST_DATA = 'POST_DATA';

export const postRatingData = (data, teacherId) => {
    return {type: POST_DATA, data: data, teacherId: teacherId}
}