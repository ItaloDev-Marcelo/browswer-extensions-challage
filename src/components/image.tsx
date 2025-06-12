 type ImageProps = {
   url: string,
   alt: string
 }


export default function Img({url, alt}:ImageProps ){
    return  <img src={url} alt={alt} />

}