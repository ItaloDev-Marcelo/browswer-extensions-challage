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
        <article className="w-[100%] h-[210px] md:w-[250px] lg:w-[385px] 
         bg-yellow-500 xl:w-[377px] rounded-[7px] p-3 ">
              <div className="flex flex-row">
                  <figure className='pr-2 md:pr-3'>
                      <Img url={logo} alt={name} />
                  </figure>
                 <div className="py-2 px-3 w-[75%]  ">
                     <h3>{name}</h3>
                  <p>{description}</p>
                 </div>
              </div>
              <div>
                 <button>Remove</button>
                 <div>
                     <input type="checkbox" name="toggle"
                      onChange={() => handleSelectActive(name)} checked={isActive}  />
                 </div>
              </div>
        </article>
    )
}