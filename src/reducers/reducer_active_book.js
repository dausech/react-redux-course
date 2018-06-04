// the state argument is not Application state, only the state this reducer is responsible for

export default function (state=null, action)  {
    switch(action.type) {
        case 'BOOK_SELECTED':
           //console.log(action.payload);
           return action.payload;
    }

    return state;
}
