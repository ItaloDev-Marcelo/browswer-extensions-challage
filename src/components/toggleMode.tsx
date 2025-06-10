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
        <header style={{background: toggle ? '#1f2535' : '#fcfdff'}} className='flex
         justify-between p-2 
         my-4 mx-2 max-w-[95%] md:mx-15 md:my-5 rounded-[10px] '>
             <a href='#index.html'>
                <img src={toggle ? Logo : WhiteLogo} alt='logo'/>
             </a>
             <button onClick={() => toggleStyle(!toggle)}
              style={{background: 'gray',width: '40px', display: 'inline-block', borderRadius: '7px'}}>
                <img src={toggle ? Sun : Moon} alt='toggle'  />
             </button>
        </header>
    )
}