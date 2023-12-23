import React from 'react';
import LazyLoad from 'react-lazyload';
const LazyLoader = ({children}) => {
    return (
        <React.Fragment>
            <LazyLoad>
            {children}
            </LazyLoad>
        </React.Fragment>
    );
};

export default LazyLoader;