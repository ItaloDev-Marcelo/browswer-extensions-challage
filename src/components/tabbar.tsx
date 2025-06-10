
type Props = {
    SelectOptions : (optionName: string) => void,
    activeNavItem: string
}

export default function Tabar({SelectOptions, activeNavItem}: Props) {
    return (
         <div className="flex flex-col justify-center text-center 
         md:flex-row md:items-center md:justify-between md:mx-15 ">
            <h1 className="my-4 text-[2.2em] font-semibold">Extensions List</h1>
            <nav>
                <ul className="flex justify-evenly md:w-[270px] ">
                    <li className={activeNavItem === 'all' ? 'tab active' : 'tab'} onClick={() => SelectOptions('all')}><a href="#">All</a></li>
                    <li className={activeNavItem === 'active' ? 'tab active' : 'tab'}  onClick={() => SelectOptions('active')}><a href="#">Active</a></li>
                    <li className={activeNavItem === 'inactive' ? 'tab active' : 'tab'}  onClick={() => SelectOptions('inactive')}><a href="#">Inactive</a></li>
                </ul>
            </nav>
         </div>
    )
}