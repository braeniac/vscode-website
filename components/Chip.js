import React, { useState, useEffect } from 'react'; 
import { shuffle } from 'lodash';

function Chip({ language }) {

    const [color, setColor] = useState(null);

    const colors = [
        'border-orange-300',
        'border-blue-300',
        'border-green-300',
        'border-red-300',
        'border-yellow-300',
        'border-pink-300',
        'border-lime-300',
    ];
    
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