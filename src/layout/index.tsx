import {useState } from "react"
import ManagerData from '../layout/data'
import Card from "../components/card"
import Tabar from "../components/tabbar";
import ToggleNav from "../components/toggleMode";




export default function ManagerDeskboard() {

    const [data, setData] = useState(ManagerData)
    const [defaultData, setDefaultData] = useState(ManagerData)
    const [toggle, setToggle] = useState(true)
    const [activeNavItem, setActiveNavItem] = useState('active');

    const handleSelectActive = (id:string) => {
        const update = data.map((item) => {
           return item.name === id ? {...item, isActive: !item.isActive} : item
        })

        setData(update)
        setDefaultData(update)
    }

    const option2 = defaultData.map(ActiveOtions => ActiveOtions).filter(IsActiveOtions => IsActiveOtions.isActive === true)
    const option3 = defaultData.map(notActiveOptions => notActiveOptions).filter(notActiveOptions => notActiveOptions.isActive === false)
    


    const SelectOptions = (optionName:string) => {

       if(optionName === 'all') {
        setData(defaultData)
        setActiveNavItem('all')
       }else if(optionName === 'active') {
        setActiveNavItem('active')
        setData(option2)
       }else {
        setData(option3)
        setActiveNavItem('inactive')
       }
    }

    const toggleStyle = (toggleValue:boolean) => {
      setToggle(toggleValue)
    }


    



    return (
        <div className={toggle ? 'mode dark' : 'mode'}>
            <ToggleNav toggleStyle={toggleStyle} toggle={toggle} />
        <Tabar SelectOptions={SelectOptions} activeNavItem={activeNavItem} />
          <main>
            {
            data.map((item, index) => {
                const {logo,name,description,isActive} = item
               return <Card key={index} logo={logo} 
               name={name} description={description} 
               isActive={isActive} handleSelectActive={handleSelectActive}
               />
            })
          }
          </main>
        </div>
    )
}