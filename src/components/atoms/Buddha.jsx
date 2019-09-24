import React from 'react';
import PropTypes from 'prop-types';

const Buddha = props => {
    let classNames = [ ...props.classes ];
    return <img alt={ 'Tiny buddha sitting on a lotus flower' } className={ classNames }
                src={ 'resources/tiny-buddha.svg' }/>;
};

Buddha.propTypes = {
    classes: PropTypes.array
};

Buddha.defaultProps = {
    classes: []
};

export default Buddha;
