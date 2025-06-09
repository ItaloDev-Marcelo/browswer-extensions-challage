import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';
import Logo from '../assets/images/logo.svg'
import WhiteLogo from '../assets/images/white.svg'

type Props = {
    toggle: boolean,
    toggleStyle: (toggle: boolean) => void
}


export default function ToggleNav({toggleStyle, toggle}: Props ) {



    return (
        <header>
             <a href='#index.html'>
                <img src={toggle ? Logo : WhiteLogo} alt='logo'/>
             </a>
             <button onClick={() => toggleStyle(!toggle)}>
                <img src={toggle ? Sun : Moon} alt='toggle'/>
             </button>
        </header>
    )
}