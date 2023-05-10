import React from 'react';

const IntelName = ({ data }) => {
    return (

<div className='HomeIntelContent'>
    <h1>{data.title}</h1>
    <p>{data.location}</p>
 </div>
    )
}
export default IntelName;