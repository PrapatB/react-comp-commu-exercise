import React from 'react';
import Home from './Home';
import { CONTENT_KEY } from '../constants';
import ExPropsContent from './ex-props/ExPropsContent';

export default (props) => {
    const { contentKey } = props;

    switch (contentKey) {
        case CONTENT_KEY.EX_PROPS:
            return <ExPropsContent />;
    
        default:
            break;
    }

    return <Home />;
}