import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV';


const Button = (props) => {
    function displayBtn() {
        let control;
        !props.isEdit 
        ? control = 
        <div>
            <FontAwesomeIcon className="controlBtn" icon={faEllipsisV} />
            <div className="controlSystem">
                <div onClick={props.displayEditInputs}>Edit</div> 
                <div onClick={props.onDelete}>Delete</div>
            </div>
        </div>
        : control = 
            <div>
                <button onClick={props.onCancel}>Cancel</button>
                <button onClick={props.onSave}>Save</button>
            </div>
        return control;
    }
    return (
        <div>
            {displayBtn()}
        </div>
    )
}

export default Button;