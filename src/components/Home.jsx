import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {addtoNotes, updatetoNotes} from '../redux/notesSlice'

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setsearchParams] = useSearchParams();
    const noteId = searchParams.get('noteId');

    const dispatch = useDispatch();

    function createNote(){
        const note = {
            title: title,
            content: value,
            _id: noteId || Date.now().toString(36), // if dont you have a noteId, then create a new id by date 
    
            createAt:new Date().toISOString(), //to save the current date and time
        }
        if(noteId){
        //update the note
        dispatch(updatetoNotes(note));
    }else{
        // create a dispnew note
        dispatch(addtoNotes(note));
    }

    //after creation or updation clear the title & value of note
    setTitle('');
    setValue('');
    setsearchParams({});//clear serch params
    }
    //to store the note in local storage
    

    return (
        <>

            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">
                    <input className="from-control w-50 my-3 border border-2 border-primary rounded-3 p-2"
                        type="text"
                        placeholder="Enter title here"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button
                    onClick={createNote}
                     className="btn btn-primary mx-2 my-3 rounded-3 p-2">
                        {
                            noteId ? 'Update My Note ' : 'Create My Note'
                        }
                    </button>

                </div>
                <div className="d-flex justify-content-center">
                    <textarea
                        className="form-control w-75 my-3 border border-2 border-primary rounded-3 p-2"
                        value={value}
                        placeholder="Enter your note here"
                        onChange={(e) => setValue(e.target.value)}

                    />
                </div>
            </div>

            {/* <h1>Home</h1> */}


        </>
    );
}
export default Home