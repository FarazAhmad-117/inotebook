import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';


export default function Notes() {
    const context = useContext(NoteContext);
    const {notes,setNotes} = context;

    return (
        <>
            <div className="container my-3">
                <h2>Your Notes</h2>
                <div className='row'>
                    {
                        notes.map((note) => {
                            return <NoteItem note={note} />;
                        })
                    }
                </div>
            </div>
        </>
    )
}
