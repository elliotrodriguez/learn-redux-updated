import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
    return <div>
       <Link to="/"><h1>Rodriguezstagram</h1></Link>
       {
           React.cloneElement(props.children, props)
       }
    </div>
}
export default Main