import moment from 'moment/moment';
import React from 'react';

const DetailsHeader = ({serviceDetail}) => {
    const {name,image,id,description}= serviceDetail || {};
    return (
        <div>
            <div className='space-y-2'>
                <span >
                    <p className='text-center'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                </span>
                <h1 className='text-3xl'>{name}</h1>
            </div>
        </div>
    );
};

export default DetailsHeader;