import { createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
            //your added note has been sent through payload to here in action, so lets extract that note from action and have it in note variable
            const note = action.payload;
            console.log('created note info', note);
            //adn add this note to the notes array in state , which I have in initialstate
            state.notes.push(note);
            // now add this note to the local storage
            localStorage.setItem('notes', JSON.stringify(state.notes));     
        },
        updatetoNotes: (state, action)=>{
            const note = action.payload;
            console.log('note for updation',note)
            const index = state.notes.findIndex((n)=> n._id === note._id);
            if(index >= 0){
                // if note found with that id, then update the note
                state.notes[index] = note;
                //update the local storage as well
                localStorage.setItem('notes',JSON.stringify(state.notes));
                //add a toast to notify the user that the note has been updated successfully
                
                toast.success("Note updated");
            }
        },
        resetAllNotes: (state, action)=>{
            state.notes = [];
            localStorage.removeItem('notes');
        },
        removeFromNOtes: (state, action)=>{
            const noteId= action.payload;
            console.log('slice dlt id',noteId);
            const index = state.notes.findIndex((n) => n._id === noteId );
            console.log('dlt index',index)
            if(index >= 0){
                state.notes.splice(index,1);
                //upadte localstorage as well
                localStorage.setItem('notes',JSON.stringify(state.notes));
                toast.success("Note deleted");
            }
        }
    }
});

export const {addtoNotes, updatetoNotes, resetAllNotes, removeFromNOtes} = noteSlice.actions;
// export const {addtoNotes, updatetoNotes} = noteSlice.actions;
export default noteSlice.reducer;