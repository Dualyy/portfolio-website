import  { Dispatch, SetStateAction } from 'react';
import './modal.css'
import { GalleryInfo } from './GalleryInfo';



export const ModalPreviewImage = (props: {
  index: number,
  source: string,
  galleryInfo: GalleryInfo[],
  setCurrentIndex: Dispatch<SetStateAction<number>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>}) => {


  return (
    <>
      <img className="preview-Image"
      onClick={() => {
        props.setCurrentIndex(props.index);
        props.setIsOpen(true);}}
        src={props.source}
        alt={`${props.galleryInfo[props.index].altText}`}
        title={`Preview ${props.index}: ${props.galleryInfo[props.index].altText}`} />
    </>
  );
};

