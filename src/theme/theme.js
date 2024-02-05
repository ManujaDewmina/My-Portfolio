import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialThemeState={
    mode:'light',
    uiColor:'rgb(143, 143, 143)',
    theme:{
        color:'black',
        backgroundColor:"rgb(237, 249, 254)",
    },
    nonThemeColor:'black'
};

const themeSlice=createSlice({
    name:'theme',
    initialState:initialThemeState,
    reducers:{
        changeThemeColor(state,action){
            state.theme.color=action.payload;
        },
        toggleMode(state){
            if(state.mode==='light'){
                state.mode='dark';
                state.theme.color='rgb(5, 245, 229)';
                state.theme.backgroundColor='black';
                state.nonThemeColor='white';
            }
            else{
                state.mode='light';
                state.theme=initialThemeState.theme;
                state.nonThemeColor='black';
            }
        }
    }
});
const store=configureStore({
    reducer:themeSlice.reducer
});

export const themeActions=themeSlice.actions;
export default store;