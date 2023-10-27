import NoteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "65395675d8e52dfd0f60515c",
            "user": "6538880c28e8f84287914cb7",
            "title": "React as a Framework",
            "description": "React is a JavaScript Library used to write fast and secure websites",
            "tag": "React",
            "date": "2023-10-25T17:55:01.362Z",
            "__v": 0
        },
        {
            "_id": "653959cd664211bab7ea3bc5",
            "user": "6538880c28e8f84287914cb7",
            "title": "Android Development",
            "description": "Android Development is defined as devlopment of applications that can run on android operating system.It can be carried out using high level languages like Java or Kotlin.Both of these can be helpful as they contain specific libraries for android development.",
            "tag": "Android",
            "date": "2023-10-25T18:09:17.679Z",
            "__v": 0
        },
        {
            "_id": "653a3762c6b31baf9c3088c6",
            "user": "6538880c28e8f84287914cb7",
            "title": "New Update this time",
            "description": "Believe me it is really updated",
            "tag": "Update",
            "date": "2023-10-26T09:54:42.718Z",
            "__v": 0
        },
        {
            "_id": "653a3762c6b31baf9c3088c6",
            "user": "6538880c28e8f84287914cb7",
            "title": "New Update this time",
            "description": "Believe me it is really updated",
            "tag": "Update",
            "date": "2023-10-26T09:54:42.718Z",
            "__v": 0
        },
        {
            "_id": "653a3762c6b31baf9c3088c6",
            "user": "6538880c28e8f84287914cb7",
            "title": "New Update this time",
            "description": "Believe me it is really updated",
            "tag": "Update",
            "date": "2023-10-26T09:54:42.718Z",
            "__v": 0
        },
        {
            "_id": "653a3762c6b31baf9c3088c6",
            "user": "6538880c28e8f84287914cb7",
            "title": "New Update this time",
            "description": "Believe me it is really updated",
            "tag": "Update",
            "date": "2023-10-26T09:54:42.718Z",
            "__v": 0
        },
        {
            "_id": "653a3762c6b31baf9c3088c6",
            "user": "6538880c28e8f84287914cb7",
            "title": "New Update this time",
            "description": "Believe me it is really updated",
            "tag": "Update",
            "date": "2023-10-26T09:54:42.718Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes,setNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
