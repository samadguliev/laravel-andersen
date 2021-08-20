import React, { useState } from 'react';

function Card(props) {

    const { item } = props;

    return (
        <div className="card" key={item.id}>
            <div className="card-header">
                <h4>{item.name}</h4>
                <div>
                    <p>Created at: {item.created_at} </p>
                </div>
            </div>
            <div className="card-body">
                <p>Email: {item.email}</p>
                <p>Text: {item.text}</p>
            </div>
        </div>
    );
}

export default Card;
