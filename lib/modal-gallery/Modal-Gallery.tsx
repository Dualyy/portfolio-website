import { useState } from 'react';
import "./modal.css";
import { ModalPreviewImage } from './Modal-Preview-Image';
import { ModalCard } from './Modal-Card';
import { GalleryInfo } from './GalleryInfo'
import { nanoid } from 'nanoid';


export const ModalGallery = (props :{ galleryInfo: GalleryInfo[], colorMode: string, key: string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRight] = useState(false);
    const [isLeft] = useState(false);


    function handleModalNavigation(e: React.MouseEvent<HTMLButtonElement>){
      if((e.target as HTMLButtonElement).id === "modal-button-right"){
        setCurrentIndex((prev) => {
          if (currentIndex + 1 < props.galleryInfo.length) {
            return prev + 1;
          } else {
            return 0;
          }

      });
    } else if((e.target as HTMLButtonElement).id === "modal-button-left"){
        setCurrentIndex((prev) => {
          if (currentIndex - 1 >= 0) {
            return prev - 1;
          } else {
            return props.galleryInfo.length - 1;
          }
        });
    }

    }
    return (
      <div className={`card ${props.colorMode}`}>
        {
          props.galleryInfo.map((image, idx) => (
            <div className='preview-Image-container' key={idx}>
            <ModalPreviewImage
              key={nanoid()}
              index={idx}
              galleryInfo={props.galleryInfo}
              source={image.source}
              setCurrentIndex={setCurrentIndex} // Pass setCurrentIndex to ModalCard
              setIsOpen={setIsOpen}
            />
            </div>
          ))
        }
        {isOpen && (
          <>
            <div
              className="backdrop"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="dialog" autoFocus >

             <ModalCard 
             key={nanoid()}
             isLeft={isLeft}
             isRight={isRight}
             handler={handleModalNavigation}
             setCurrentIndex={setCurrentIndex} // Ensure ModalCard accepts this prop
             alt={props.galleryInfo[currentIndex].altText}
             currentIndex={currentIndex}
             galleryInfo={props.galleryInfo}
             setIsOpen={setIsOpen}
             isOpen={isOpen}
              ><div></div></ModalCard>
            </div>
          </>
        )}
      </div>
    );
};

