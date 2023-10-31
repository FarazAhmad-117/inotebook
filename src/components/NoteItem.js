import React from 'react'

export default function NoteItem(props) {
    const { note } = props;
    const { title, description, tag } = note;
    return (
        <div className='col-md-3 my-2'>
            <div className="card">
                <div className="card-body">
                    <div className="icons mb-2 d-flex justify-content-end">
                        <i className="fa-solid fa-trash-can mx-2" onClick={()=>{props.showAlert("danger","The note has been deleted.")}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{tag}</h6>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}
