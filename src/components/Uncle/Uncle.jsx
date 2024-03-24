import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>Also has : {gift}</p>

        </div>
    );
};

export default Uncle;