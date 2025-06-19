import { createSlice} from '@reduxjs/toolkit';
// Helper to safely parse JSON from localStorage
function getNotesFromLocalStorage() {
    try {
        const notes = localStorage.getItem('notes');
        return notes ? JSON.parse(notes) : [];
    } catch (e) {
        // If invalid JSON, clear the corrupted value and return empty array
        localStorage.removeItem('notes');
        return [];
    }
}

const initialState = {
    notes: getNotesFromLocalStorage()
};
export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers:{
        addtoNotes : (state, action)=>{
            //your added note has been sent through payload to here in action, so lets extract that note from action and ave it in note variable
            const note = action.payload;
            //adn add this note to the notes array in state , which I have in initialstate
            state.notes.push(note);
            // now add this note to the local storage
            localStorage.setItem('notes', JSON.stringify(state.notes));     
        },
        updatetoNotes: (state, action)=>{

        },
        resetAllNotes: (state, action)=>{

        },
        removeFromNOtes: (state, action)=>{

        }
    }
});

// export const {addtoNotes, updatetoNotes, resetAllNotes, removeFromNOtes} = noteSlice.actions;
export const {addtoNotes, updatetoNotes} = noteSlice.actions;
export default noteSlice.reducer;