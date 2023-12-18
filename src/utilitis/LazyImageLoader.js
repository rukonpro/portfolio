import React from 'react';
import LazyLoad from 'react-lazyload';
const LazyImageLoader = ({children}) => {
    return (
        <React.Fragment>
            <LazyLoad>
            {children}
            </LazyLoad>
        </React.Fragment>
    );
};

export default LazyImageLoader;