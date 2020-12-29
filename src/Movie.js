import React from 'react';
import PropTypes from 'prop-types';

function Movie({id,title,year,summary,poster}){
    return <h1>{title}</h1>;
}

Movie.propTypes = {
    id : PropTypes.number.isRequired
    , year : PropTypes.number.isRequired
    , title : PropTypes.string.isRequired
    , summary : PropTypes.string.isRequired
    , poster : PropTypes.string.isRequired //Api 내에 있는 medium_cover_image
};

export default Movie;
