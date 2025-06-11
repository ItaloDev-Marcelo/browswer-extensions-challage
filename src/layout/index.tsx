import {useEffect, useState } from "react"
import ManagerData from '../layout/data'
import Card from "../components/card"
import Tabar from "../components/tabbar";
import ToggleNav from "../components/toggleMode";

import { motion } from "framer-motion";


export default function ManagerDeskboard() {

    const [data, setData] = useState(ManagerData)
    const [defaultData, setDefaultData] = useState(ManagerData)
    const [toggle, setToggle] = useState(true)
    const [activeNavItem, setActiveNavItem] = useState('active');
    const [bgStyle, setBgStyle] = useState('');

    const handleSelectActive = (id:string) => {
        const update = data.map((item) => {
           return item.name === id ? {...item, isActive: !item.isActive} : item
        })

        setData(update)
        setDefaultData(update)
    }

    useEffect(() => {
      setBgStyle(!toggle ? 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)' : 'linear-gradient(180deg, #040918 0%, #091540 100%)' )
    }, [toggle])

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
        <motion.div
         animate={{background: bgStyle }}
         transition={{duration: 0.4}}
         className={toggle ? 'mode dark' : 'mode'}>
           <ToggleNav toggleStyle={toggleStyle} toggle={toggle} />
        <Tabar SelectOptions={SelectOptions} activeNavItem={activeNavItem} />
          <main className='grid grid-cols-1 gap-y-[5] mt-2 md:my-4
           md:grid-cols-2 gap-5  md:gap-5
           xl:grid-cols-3 xl:gap-3
          md:mx-14  px-2'>
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
        </motion.div>
    )
}