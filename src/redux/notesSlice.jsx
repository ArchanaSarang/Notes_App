import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    notes : localStorage.getItem('notes')? JSON.parse(localStorage.getItem('notes')): []
};
export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers:{
        addtoNotes : (state, action)=>{
            
        },
        updatetoNotes: (state, action)=>{

        },
        resetAllNotes: (state, action)=>{

        },
        removeFromNOtes: (state, action)=>{

        }
    }
});

export const {addtoNotes, updatetoNotes, resetAllNotes, removeFromNOtes} = noteSlice.actions;
export default noteSlice.reducer;