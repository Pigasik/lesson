// const myStore = {count: 0};

// export default function reducer (store = myStore, action) {
//     if(action.type === 'INCREASE'){
//         return{
//             ...store, count: store.count + 1
//         };
//     }else if(action.type === 'DECREASE'){
//         return{
//             ...store, count: store.count - 1
//         };
//     } return {...store}
// }

let i = 0;
export default function reducer(store = [], action){
    if(action.type === 'ADD_TASK'){
        return [...store, {...action.task, id: i++}];
    } else if (action.type === 'DONE_TASK'){
        return store.map((el) => el.id === action.id ? {...el, done: !el.done} : el);
    } else if (action.type === 'SHOW_TYPE'){
        return (store.filter(el => el.done))
    } else if (action === 'SHOW_ALL'){
        return [...action.tasks]
    }
    return [...store];
}