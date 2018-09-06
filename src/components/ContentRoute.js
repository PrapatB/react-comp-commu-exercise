import React from 'react';
import Home from './Home';
import { CONTENT_KEY } from '../constants'

export default (props) => {
    const { contentKey } = props;

    switch (contentKey) {
        case CONTENT_KEY.EX_PROPS:
            
            break;
    
        default:
            break;
    }

    return <Home />;
}