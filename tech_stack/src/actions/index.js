/*  Action Creator
    when we export many functions we use only
    export instead of export default */

export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: 'libraryId'
    };
};