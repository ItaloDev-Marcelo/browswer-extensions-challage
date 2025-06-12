import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';
import Logo from '../assets/images/logo.svg'
import WhiteLogo from '../assets/images/white.svg'

type NavProps = {
    toggle: boolean,
    toggleStyle: (toggle: boolean) => void
}




export default function ToggleNav({toggleStyle, toggle}: NavProps ) {



    return (
        <header style={{background: toggle ? '#1f2535' : '#fcfdff'}} className='flex
         justify-between p-4
         my-4 mx-2 max-w-[95%] md:mx-15 md:my-5 rounded-[10px] '>
             <a href='#index.html'>
                <img src={!toggle ? Logo : WhiteLogo} alt='logo'/>
             </a>
             <button onClick={() => toggleStyle(!toggle)} className='cursor-pointer'
              style={{background: toggle ? '#4f5561' : '#eeeef0' ,width: '40px', display: 'inline-block', borderRadius: '7px'}}>
                <img src={toggle ? Sun : Moon} alt='toggle'  />
             </button>
        </header>
    )
}