import axios from "axios";
import React, { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/react-alice-carousel"
import { img_300, noPicture } from "../../config/config";
import "./Carousel.css"

const handleDragStart = (e) => e.preventDefault()

const Carousel = ({media_type, id}) => {

    const [credits, setCredits] = useState()

    const items = credits?.map((credit) => (
        <div className="carouselItem">
            <img src={credit.profile_path ? `${img_300}/${credit.profile_path}` : noPicture} alt={credit?.name} onDragStart={handleDragStart} className="carouselItem__img" />
            <b className="carouselItem__txt">{credit?.name}</b>
        </div>
    ))

    const responsive = {
        0: {
            items: 3,
        },
        512: {
            items: 5
        },
        1024: {
            items: 7,
        },
    }

    const fetchCredits = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=570e41fd2d9490271b86eff02e5f203d&language=en-US`
        )
        setCredits(data.cast)
    }

    useEffect(() => {
        fetchCredits()
    })
    return <AliceCarousel autoPlay responsive={responsive} infinite disableButtonsControls disableDotsControls mouseTracking items={items} />
}

export default Carousel