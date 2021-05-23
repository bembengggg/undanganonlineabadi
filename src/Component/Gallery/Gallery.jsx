import React from 'react';
import './Gallery.css';
import gallery from '../../Assets/image/bgimage.jpg';

import SimpleReactlightbox,{SRLWrapper} from "simple-react-lightbox";
const options = {
  settings: {
    slideAnimationType: "fade",
    slideSpringValues: [300, 200],
    autoplaySpeed: 3000,
    hideControlsAfter: false
  },
  caption: {
    captionColor: "#fffff",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  }, 
   buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '5px',
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: '40px'
  }
};



const Gallery =()=>{
    return(
        <div className='wrap'>
           <img className='imgbg' alt='imgbg'src={gallery}/>
           <div className='formbtn'>
           
            </div>
           <div className='bksrangkaian'>
                <div className='bks'>Galery</div>
           </div>
           <div className='App'>
             <SimpleReactlightbox>
             <div className='grid'>
               <SRLWrapper options={options}>
              <img alt='Tetap Selalu Berjalanan Seiringan' src="https://i.ibb.co/c8q4RXX/photo4.jpg"/>
              <img alt='Komitmen adalah Kunci dalam Hubungan' src="https://i.ibb.co/gZvY8xF/photo1.jpg"/> 
              <img alt='Mencitaimu Bukan Karna siapa Kamu Tetapi Karena Siapa Aku Ketika Bersamamu' src="https://i.ibb.co/yVL2cg5/photo2.jpg" />
              <img alt='Cinta adalah Tentang Keikhlasan' src="https://i.ibb.co/NLdqhRf/Photo-8-1.png" />
              </SRLWrapper>
           </div>

             </SimpleReactlightbox>


           </div>
       
        
         </div>
    

    )
}

export default Gallery;