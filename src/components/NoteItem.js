import React from 'react'

export default function NoteItem(props) {
    const { note } = props;
    const { title, description, tag } = note;
    return (
        <div className='col-md-3 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{tag}</h6>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}
