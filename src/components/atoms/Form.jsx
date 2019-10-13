import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    let classNames = [ ...props.classes ];
    return (
        <form id={ props.id } onSubmit={ props.submitCallback } className={ classNames }>
            { props.children }
        </form>
    );

};

Form.propTypes = {
    id: PropTypes.string,
    classes: PropTypes.array,
    submitCallback: PropTypes.func.isRequired,
};

Form.defaultProps = {
    classes: [ 'Mui-form' ],
};

export default Form;
