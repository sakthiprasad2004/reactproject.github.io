import React from 'react';
import { useParams } from 'react-router-dom';
const Booklist=()=>{
    const {id}=useParams()
    return(
        <div>bookslist: {id}</div>
    );
}
export default Booklist;