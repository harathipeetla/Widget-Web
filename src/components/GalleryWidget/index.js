import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineWidgets } from "react-icons/md";
import './index.css'


const GalleryWidget =()=>{
    const [images, setImages] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)



    const handleAddImage =(e)=>{
        const files = Array.from(e.target.files)
        const imageUrls = files.map((file) => URL.createObjectURL(file))
        setImages((prevImages) => [...prevImages, ...imageUrls])
    }


    const handleNext =()=>{
        if(images.length > 3){
            setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length)
        }
    }

    const handlePrev =()=>{
        if(images.length > 3){
            setCurrentIndex((prevIndex) => (prevIndex - 3 + images.length))
        }
    }

    const getVisisbleImages =()=>{
        const visisbleImages = []
        for(let i=0; i < 3; i++){
            visisbleImages.push(images[(currentIndex + i) % images.length] || null)
        }

        return visisbleImages
    }
    return(
        <div className="gallery-widget">
            <div className="right-bar">
               <p className="icon-1">
                    <BsQuestionCircle/>
                </p>
                <p className="icon-1">
                   <MdOutlineWidgets/>
                </p>
            </div>
        <div className="part-2">
            <div className="gallery-header">
               
                <div className="header-container">
                    <h1>Gallery</h1>
                </div>
                    <div className="image-container">
                        <label className="add-image-btn">
                            + Add Image
                            <input 
                                type="file"
                                accept="image/*"
                                multiple
                                style={{display:'none'}}
                                onChange={handleAddImage}
                            />
                        </label>
                    </div>

                <div className="buttons-container">
                    <button onClick={handlePrev}><IoArrowBackOutline/></button>
                    <button onClick={handleNext}><IoMdArrowRoundForward/></button>
                </div>
            </div>  
            <div className="gallery-content">
                        {getVisisbleImages().map((image, index) => (
                            image ? (
                                <img key={index} 
                                src={image}
                                alt={`Gallery  ${currentIndex + index + 1}`}
                                className="gallery-image"
                                />
                            ): (
                                ''
                            )
                        ))}
            </div>
        </div>
        </div>

    )
}

export default GalleryWidget