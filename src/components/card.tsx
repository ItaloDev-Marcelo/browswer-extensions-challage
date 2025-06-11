import Img from "./image";

type CardType = {
    logo: string,
    name: string,
    description: string,
    isActive: boolean,
    handleSelectActive: (id: string) => void
}


export default function Card({logo,name,description,isActive, handleSelectActive} :CardType) {
    return (
        <article className="w-[100%] py-5 h-[230px] md:w-[100%] 
        md:h-[auto] lg:w-[100%] lg:h-[220px] 
     xl:w-[345px] xl:h-[210px] rounded-[7px] 
     md:p-4 shadow-sm cursor-pointer">
              <div className="flex flex-row justify-baseline px-4 xl:px-1">
                  <figure className='pr-2 mt-3 md:pr-3'>
                      <Img url={logo} alt={name} />
                  </figure>
                 <div className="py-2 px-3 w-[75%] xl:w-[77%]  ">
                     <h3 className="mb-1">{name}</h3>
                  <p>{description}</p>
                 </div>
              </div>
              <div className="flex flex-row items-center mt-7 xl:mt-4   justify-between
               px-7 md:px-4 md:mr-2 lg:mr-9 xl:mr-5 xl:px-3">
                 <button className=" p-2 rounded-[50px] ">Remove</button>
                 <div className='toggle'>
                    <label htmlFor='switch'>
                     <input id='switch' type="checkbox" name="toggle"
                      onChange={() => handleSelectActive(name)} checked={isActive}/>
                    </label>
                 </div>
              </div>
        </article>
    )
}