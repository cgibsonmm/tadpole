import React from 'react'
import Nav from './sharedComponents/Nav';

export default function createTemplate() {
    return (
        <>
            <Nav />
            <body className="body">
                <div className="template-body">
                    <textarea className="create-template" placeholder="Enter text here"></textarea>
                    <button className="save-button">Save</button>
                </div>
            </body>
        </>
    )
}