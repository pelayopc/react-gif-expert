import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category);
    
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(()=>{
    //     getImages(category);
    // },[]);

  return (
    <>
    <h3>{category}</h3>    
    {/* <LoadingMessage isLoading={ isLoading } /> */}
    {
        isLoading && ( <h2 >Cargando...</h2> )
    }
    <div className='card-grid'>
        {images.map((image)=>(
            <GifItem 
                key={image.id} 
                // title={image.title}
                // url={image.url}
                {...image}
            />
        ))}
        
    </div>

    </>
  )
}
