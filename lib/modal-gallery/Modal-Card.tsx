import   { MouseEventHandler, ReactNode }  from 'react';
import { ModalButton } from './Modal-Button';
import { GalleryInfo } from './GalleryInfo'
import { nanoid } from 'nanoid';

export const ModalCard = (props: {children: ReactNode,
      alt: string,
      isRight: boolean,
       isLeft: boolean,
        handler: MouseEventHandler,
         setCurrentIndex: (index: number) => void,
        currentIndex: number,
        galleryInfo: GalleryInfo[],
    setIsOpen: (isOpen: boolean) => void
isOpen: boolean})  => {
    return (<>
        <div className="Modal-card-container">
        
                      <div className='image-container-test'>
                      <img
                        id={"dialog--image"}
                        src={props.galleryInfo[props.currentIndex].source}
                        alt={`${props.galleryInfo[props.currentIndex].altText}`}
                       title={`${props.galleryInfo[props.currentIndex].title}`}
                        
                      />
                      <button aria-label={"close preview"} className={"close"} onClick={() => {props.setIsOpen(false)}}>
                      <img src={"./lib/assets/gallery/x-symbol-svgrepo-com.svg"} 
                      className={"close-img"}
                       onClick={() => {props.setIsOpen(false)}}
                       />
                      </button>
                      </div>
                      <div className={"Modal-card-navigation"}>
                      <ModalButton
                      key={nanoid()}
                        onClickHandler={props.handler}
                        isRight={false}
                        isLeft={true}
                      />
                      <ModalButton
                      key={nanoid()}
                        onClickHandler={props.handler}
                        isRight={true}
                        isLeft={false}
                      />
                      </div>
        </div>
        </>
    );
};