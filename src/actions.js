import {Change_Search_Field}from './constants';

export const setSearchField =(text)=>({
type:Change_Search_Field,
payload:text
})