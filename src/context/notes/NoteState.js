import NoteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props) => {
    const token = localStorage.getItem('authToken');
    const [authToken,setAuthToken] = useState(token);

    let host = "http://localhost:5000";
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    // Get all notes
    const getNotes = async ()=>{
        try {
            // TODO: API call
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken 
                }
            });
    
            if (!response.ok) {
                throw new Error(`API request failed with status: ${response.status}`);
            }
    
            const json = await response.json();
            setNotes(json);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    // Add a note
    const addNote = async (note)=>{
        const {title,description,tag} = note;
        // TODO: API call
        const response = await fetch(`${host}/api/notes/addnote`,{
            method:'POST',  // POST "/api/notes/addnote"
            headers: {
                "Content-Type": "application/json",
                "auth-token":authToken
            },
            body: JSON.stringify({title,description,tag})
        });
        // eslint-disable-next-line
        const json = await response.json();
        let note1 = {
            "_id": "653a3762c6b31baf9c3088cb",
            "user": "6538880c28e8f84287914cb7",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-10-26T09:54:42.718Z",
            "__v": 0
        };
        setNotes(notes.concat(note1));
    }
    // Delete a note
    const deleteNote =async (id)=>{
        // TODO: API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:'DELETE',  
            headers: {
                "Content-Type": "application/json",
                "auth-token":authToken
            }
        });
        // eslint-disable-next-line
        const json =await response.json();
        let newNotes = notes.filter((note)=>{return (note._id!==id)});
        setNotes(newNotes);
    }
    // Edit a note
    const editNote = async(id,title,description,tag)=>{
        // TODO: API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:'PUT',  // PUT "/api/notes/updatenote/:id"
            headers: {
                "Content-Type": "application/json",
                "auth-token":authToken
            },
            body: JSON.stringify({title,description,tag})
        });
        // eslint-disable-next-line
        const json =await response.json();
        let newNotes = JSON.parse(JSON.stringify(notes));
        // Logic to show in client
        for(let i=0;i<newNotes.length;i++){
            const element = newNotes[i];
            if(element._id === id){
                newNotes[i].title = title;
                newNotes[i].description=description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes,setAuthToken,authToken}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
