
type Props = {
    SelectOptions : (optionName: string) => void,
    activeNavItem: string
}

export default function Tabar({SelectOptions, activeNavItem}: Props) {
    return (
         <div className="flex flex-col justify-center text-center md:flex-row md:items-center md:justify-between">
            <h1 className="my-4 text-2xl font-semibold">Extensions List</h1>
            <nav>
                <ul className="flex justify-evenly">
                    <li className={activeNavItem === 'all' ? 'tab active' : 'tab'} onClick={() => SelectOptions('all')}><a href="#">All</a></li>
                    <li className={activeNavItem === 'active' ? 'tab active' : 'tab'}  onClick={() => SelectOptions('active')}><a href="#">Active</a></li>
                    <li className={activeNavItem === 'inactive' ? 'tab active' : 'tab'}  onClick={() => SelectOptions('inactive')}><a href="#">Inactive</a></li>
                </ul>
            </nav>
         </div>
    )
}