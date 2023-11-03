import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function AddNote(props) {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleClick = (e) => {
        addNote(note);
        e.preventDefault();
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("success","The Note has been Added.");
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="container my-3 mt-6 ">
                <h2>Add Note</h2>
                {/* // A form to add Notes */}
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label"><b>Title:</b></label>
                        <input type="text" className="form-control" placeholder='Enter title here' id="title" name='title' aria-describedby="emailHelp" value={note.title} onChange={handleChange} minLength={5} required aria-required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label"><b>Description:</b></label>
                        <textarea className="form-control" placeholder="Enter description here" id="description" name='description' value={note.description} onChange={handleChange} minLength={5} required aria-required ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label"><b>Tag:</b></label>
                        <input type="text" className="form-control" id="tag" name='tag' placeholder='Enter tag here' value={note.tag} onChange={handleChange} minLength={3} required aria-required />
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </>
    )
}
