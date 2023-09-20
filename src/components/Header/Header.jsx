import { useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';


const logos = ['/logo.svg', '/vite.svg'];


function Header() {
    const [logoIndex, setLogoIndex] = useState(0);

    console.log('header');
    
    const toggleLogo = () => {
        setLogoIndex(state => Number(!state));
    };
    
    return (
        <div className='header'>
            <Logo image={logos[logoIndex]}/>
            <SelectUser />
            <Button onClick={toggleLogo}>Сменить лого</Button>
        </div>
    );
}

export default Header;