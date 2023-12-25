import React from 'react';
import LazyLoader from "../../Helpers/LazyLoader";

const Carousel = ({images}) => {


    return (
        <div className="carousel w-full">
            {
                images?.map((image,index)=>
                    <div key={image} id={index} className="carousel-item relative w-full">
                        <LazyLoader>
                            <img src={image} className="w-full" height="100%" width="100%" alt="coverphoto" loading="lazy"/>
                        </LazyLoader>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#${index>0&&index<images?.length? index-1:index+images.length}`} className="btn btn-circle">❮</a>
                            <a href={`#${index>-1&&index<images?.length? index+1:index-images.length}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Carousel;