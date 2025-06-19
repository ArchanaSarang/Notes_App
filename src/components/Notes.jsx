import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {removeFromNOtes} from '../redux/notesSlice'
const Notes = () => {
    //get the notes from the redux store
    const note = useSelector((state) => state.note.notes);
    const [searchTerm, setsearchTerms] = useState('');
    const dispatch = useDispatch();

    //handle seach term change
    const handleSearchChange = (e) => {
        setsearchTerms(e.target.value);
    }
    // filter notes based on search term
    const filteredNotes = note.filter((n) => {
        return n.title.toLowerCase().includes(searchTerm.toLowerCase())
    });

    function handleDelete(noteId){
        dispatch(removeFromNOtes(note._id));
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <input className='p-2 w-50 rounded-md w-full mt-4 bg-gray-100 border border-gray-300 foocus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='search notes...'
                    type="search"
                    value={searchTerm}
                    onChange={handleSearchChange} />
            </div>

            {/* display the filtered data / notes in cards */}

            <div>
                {
                    filteredNotes.length > 0 &&
                    filteredNotes.map(
                        (note) => {
                            return (
                                <div className='border border-primary rounded p-2 m-2 bg-gray text-dark shadow-lg'>
                                    <div className='text-success font-bold text-lg mb-2 fs-1'>
                                        {note.title}
                                    </div>
                                    <div>
                                        {note.content}
                                    </div>
                                    
                                    <div className="btn-group btn-group-sm mt-3" role="group" aria-label="Large button group">
                                        <button type="button" className="btn btn-outline-warning">Edit</button>
                                        <button type="button" className="btn btn-outline-warning">View</button>
                                        <button type="button" className="btn btn-outline-warning" onClick={()=>{handleDelete(note._id)}}>Delete</button>
                                        <button type="button" className="btn btn-outline-warning">Copy</button>
                                        <button type="button" className="btn btn-outline-warning">Share</button>
                                    </div>
                                    <div className='text-secondary mt-2 text-end fs-6'>
                                        {note.createAt ? new Date(note.createAt).toUTCString():' No date avaialbale'}
                                    </div>
                                    <div>
                                        {
                                            note._id
                                        }
                                    </div>
                                </div>

                            );

                        })
                }
            </div>


        </>
    );
}
export default Notes