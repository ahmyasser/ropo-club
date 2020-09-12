import {Change_Search_Field} from './constants';

const intialState={
    searchField:''
}

export const searchRobots= (state=intialState,action={})=>{
switch (action.type) {
    case Change_Search_Field:
        return  Object.assign({},state,{searchField:action.payload});

    default:
        return state;       
}
}