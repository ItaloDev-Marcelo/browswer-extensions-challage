
type TabProps = {
    SelectOptions : (optionName: string) => void,
    activeNavItem: string
}

export default function Tabar({SelectOptions, activeNavItem}: TabProps) {
    return (
         <div className="flex flex-col justify-center my-7 md:my-0 text-center 
         md:flex-row md:items-center md:justify-between md:mx-15 ">
            <h1 className="my-4 ">Extensions List</h1>
            <nav>
                <ul className="flex justify-evenly md:w-[270px] xl:-pl-2 ">
                    <li className={activeNavItem === 'all' ? 'tab active' : 'tab'} onClick={() => SelectOptions('all')}><a href="#">All</a></li>
                    <li className={activeNavItem === 'active' ? 'tab active' : 'tab'}  onClick={() => SelectOptions('active')}><a href="#">Active</a></li>
                    <li className={activeNavItem === 'inactive' ? 'tab active' : 'tab'}  onClick={() => SelectOptions('inactive')}><a href="#">Inactive</a></li>
                </ul>
            </nav>
         </div>
    )
}