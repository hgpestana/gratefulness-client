import React from 'react';
import PropTypes from 'prop-types';

const Buddha = props => {
    let classNames = [ ...props.classes ];
    return <img alt={ 'Tiny buddha sitting on a lotus flower' } className={ classNames }
                src={ `resources/buddha-${ props.version }.svg` } width={ props.width }/>;
};

Buddha.propTypes = {
    classes: PropTypes.array,
    version: PropTypes.number,
    width: PropTypes.string
};

Buddha.defaultProps = {
    classes: [ 'buddha-logo' ],
    version: 1,
    width: '55%'
};

export default Buddha;
