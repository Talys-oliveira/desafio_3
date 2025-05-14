import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";


type IProps = {
    images: string[];
}


export default function SlideLovelyCustomer({images}: IProps) {
    
  /*   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    } */
    
    
    if(!images.length) return <p>Images empty...</p> 

    return (
        <>
        {
            images.map( (src: string, key) => <img src={`/public${src}`} key={key}/>)
        }

        </>

    )
}

