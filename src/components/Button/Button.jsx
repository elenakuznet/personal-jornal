import './Button.css';
import { useState } from 'react';

function Button() {

    const [text, setText] = useState('Сохранить');
    console.log('Ререндер');

    const cliked = () => {
        console.log('Привет!');
        setText('закрыть');
    };
    
    return (
        <button onClick={cliked} className='button accent'>{text}</button>
    );
}

export default Button;