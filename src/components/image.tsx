 type Props = {
   url: string,
   alt: string
 }


export default function Img({url, alt}:Props ){
    return  <img src={url} alt={alt} />

}