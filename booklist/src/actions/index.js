export default function (book) {

    // selectBook is an Action Creator, it needs to return an Action - an object with a type and a payload 

    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
