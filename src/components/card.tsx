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
        <article>
              <div>
                  <figure>
                      <Img url={logo} alt={name} />
                  </figure>
                  <h3>{name}</h3>
                  <p>{description}</p>
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