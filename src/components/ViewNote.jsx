import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ViewNote = () => {

    const {id} = useParams();
    const allnotes = useSelector(state => state.note.notes);

    const note = allnotes.filter((n)=>n._id === id)[0];

    console.log('final note: ', note)



    return(
        <>
            {/* <h1>ViewNote</h1> */}

            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">
                    <input className="from-control bg-light w-50 my-3 border border-2 border-primary rounded-3 p-2"
                        type="text"
                        // placeholder="Enter title here"
                        value={note.title}
                        disabled
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {/* <button
                        onClick={createNote}
                        className="btn btn-primary mx-2 my-3 rounded-3 p-2">
                        {
                            noteId ? 'Update My Note ' : 'Create My Note'
                        }
                    </button> */}

                </div>
                <div className="d-flex justify-content-center">
                    <textarea
                        className="form-control w-75 my-3 border border-2 border-primary rounded-3 p-2"
                        value={note.content}
                        disabled
                        placeholder="Enter your note here"
                        onChange={(e) => setValue(e.target.value)}

                    />
                </div>
                {/* <button onClick={resetAll}>Reset</button> */}
            </div>

            {/* <h1>Home</h1> */}

        </>
    );
}
export default ViewNote