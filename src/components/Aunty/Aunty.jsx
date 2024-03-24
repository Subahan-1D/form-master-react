import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Aunty</h2>
            <p>Also has : {gift}</p>
        </div>
    );
};

export default Aunty;