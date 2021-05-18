import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] =useState('');
  const [isError,setIsError]=useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (<>
    {/* <h2>{firstValue}</h2>
    <h1>value: {secondValue} </h1> */}
    <h1>{text || 'Yiğit Tın'}</h1>
    <button className='btn' onClick={()=>setIsError(!isError)}> 
       Toggle Error</button>
    {isError && <h1>Error...</h1>}
    {isError ?<p>hata var...</p> : <div>
      <h2>Hata bulunamadı</h2>
      </div>}
  </>);
};

export default ShortCircuit;
