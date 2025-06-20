import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {removeFromNOtes} from '../redux/notesSlice'
import { toast } from 'react-toastify';
const Notes = () => {
    //get the notes from the redux store
    const note = useSelector((state) => state.note.notes);
    const [searchTerm, setsearchTerms] = useState('');
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     console.log('note ',note)
    // });
    //handle seach term change
    const handleSearchChange = (e) => {
        setsearchTerms(e.target.value);
    }
    // filter notes based on search term
    // const filteredNotes = note.filter((n) => n.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const filteredNotes = note.filter((n) => n && n.title.toLowerCase().includes(searchTerm.toLowerCase()));
    // useEffect(()=>{
    //     console.log('FIltered Notes ',filteredNotes)
    // });
    function handleDelete(noteId){
        console.log(noteId)
        dispatch(removeFromNOtes(noteId));
        console.log(noteId);
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <input className='form-control rounded bg-dark text-white p-2 w-50 mt-4 bg-gray-100 foocus:outline-none focus:ring-2 focus:ring-blue-500'
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
                                <div key={note._id} className='border border-primary rounded p-2 m-2 bg-gray text-dark shadow-lg'>
                                    <div className='text-success font-bold text-lg mb-2 fs-1'>
                                        {note.title}
                                    </div>
                                    <div className='text-warning font-bold text-lg mb-2 fs-3'>
                                        {note.content}
                                    </div>
                                    
                                    <div className="btn-group btn-group-sm mt-3" role="group" aria-label="Large button group">
                                        <button type="button" className="btn btn-outline-warning">
                                            

                                                <a href={`/?noteId=${note._id}`}>Edit</a>

                                            </button>
                                        <button type="button" className="btn btn-outline-warning">
                                            <a href={`/notes/${note._id}`}>View</a>
                                        </button>



                                        <button type="button" className="btn btn-outline-warning"
                                        onClick={()=>{
                                            handleDelete(note._id)
                                            console.log('btn handle',note._id)
                                            }
                                        }>Delete</button>





                                        <button type="button" className="btn btn-outline-warning" onClick={()=>{navigator.clipboard.writeText(note.content);
                                             toast("Copied to clipboard")}}>Copy</button>
                                        <button type="button" className="btn btn-outline-warning">Share</button>
                                        {/* <button type="button" className="btn btn-outline-warning" onClick={handleDeleteAll}>Delete All</button> */}
                                    </div>
                                    <div className='text-secondary mt-2 text-end fs-6'>
                                        {note.createAt ? new Date(note.createAt).toUTCString():' No date avaialbale'}
                                    </div>
                                    <div className='text-secondary mt-2 text-start fs-6'>
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