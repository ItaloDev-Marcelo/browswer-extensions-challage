import {  useState } from "react"
import ManagerData from '../data.json'
import Card from "../components/card"




export default function ManagerDeskboard() {

    const [data, setData] = useState(ManagerData)


    const handleSelectActive = (id:string) => {
        const update = data.map((item) => {
           return item.name === id ? {...item, isActive: !item.isActive} : item
        })

        setData(update)
        console.log(data)
    }
    

    return (
        <>
          {
            data.map((item, index) => {
                const {logo,name,description,isActive} = item
               return <Card key={index} logo={logo} 
               name={name} description={description} 
               isActive={isActive} handleSelectActive={handleSelectActive}
               
               />
            })
          }
        </>
    )
}