import React, { useState, useEffect } from 'react'; 
import { shuffle } from 'lodash';

function Chip({ language }) {

    const [color, setColor] = useState(null);

    const colors = [
        'border-orange-700',
        'border-blue-700',
        'border-green-700',
        'border-red-700',
        'border-yellow-700',
        'border-pink-700',
        'border-lime-700',
    ];
    console.log(color)

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, []);

    return (
        <span className={`border-2 px-2 py-1 rounded-2xl text-sm ${color}`}>
            {language}
        </span>
    )
}

export default Chip