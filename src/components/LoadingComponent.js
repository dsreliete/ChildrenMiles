import React from 'react';

export const Loading = () => {
    return (
        <div className="col text-center mt-3">
            <i className="fa fa-spinner fa-pulse fa-2x fa-fw text-primary" />
            <p>Loading...</p>
        </div>
    );
};

export default Loading;