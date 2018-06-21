import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
    function displayDesc(){
        let desc = 
            (props.isEdit 
                ? <input type='text' name='description' value={props.description} onChange={props.handleChangeInput} placeholder='Description' /> 
                : <p>{props.description}</p>)
        return desc;
    }

    return (
        <div>
            {displayDesc()}
        </div>
    )
}

Description.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    handleChangeInput: PropTypes.func
}

export default Description;