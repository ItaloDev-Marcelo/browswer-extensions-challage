import Img from "./image";
import { motion } from "framer-motion";

type CardType = {
    logo: string,
    name: string,
    description: string,
    isActive: boolean,
    handleSelectActive: (id: string) => void
}


export default function Card({logo,name,description,isActive, handleSelectActive} :CardType) {
    return (
        <motion.article
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }}}
        className="w-[100%] mt-2 p-2 h-[230px] md:mt-0 md:w-[100%] md:h-[auto] 
        lg:w-[100%] lg:h-[220px] xl:w-[345px] xl:h-[210px] rounded-[15px]
         md:p-4 shadow-sm cursor-pointer overflow-hidden text-clip">
              <div className="flex flex-row justify-baseline h-[147px]  xl:h-[140px]
              overflow-hidden text-clip
                md:px-2 xl:px-1">
                  <figure className='pr-3 mt-3 md:pr-3'>
                      <Img url={logo} alt={name} />
                  </figure>
                 <div className="py-2 pr-2 w-[75%] xl:w-[77%]  ">
                     <h3 className="mb-1">{name}</h3>
                  <p>{description}</p>
                 </div>
              </div>
              <div className="flex mt-4 md:mt-0 flex-row items-center   
               justify-between mr-3
               ">
                 <button className=" p-2 rounded-[50px] ">Remove</button>
                   <label className='switch '>
                     <input id='switch' type="checkbox" name="toggle"
                      onChange={() => handleSelectActive(name)} checked={isActive}/>
                      <span className="slider" />
                    </label>
              </div>
        </motion.article>
    )
}