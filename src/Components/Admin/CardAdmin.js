import React from "react";
import ImageCarousel from "../ImageCarousel";

const CardAdmin = ({titre}) => {
    return (
        <div className='card crd'>
            <div className='card-body'>
                <h5 className='card-title'>{titre}</h5>
                <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Donec auctor, nisl eget<br /> ultricies tincidunt, nunc nisl aliquet nunc, eget aliquet nisl nisl sit amet nisl.<br /> Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquet nunc, eget aliquet nisl nisl sit amet nisl.</p>
                <ImageCarousel/>
            </div>
        </div>
    )

}

export default CardAdmin;