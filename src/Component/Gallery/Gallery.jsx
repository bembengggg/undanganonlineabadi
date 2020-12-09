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
    captionColor: "#9C6615",
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
const style = {
  width:"100%", 
  height:"315"
};


const Gallery =()=>{
    return(
        <div className='wrap'>
           <img className='imgbg' alt='imgbg'src={gallery}/>
           <div className='formbtn'>
           {/* <button className="btn" onClick={event =>  window.location.href='https://api.whatsapp.com/send?phone=6281367649724&text=Halo%20Saya%20Akan%20Datang%20KePernikahan%20anda'}>Watch On Youtube</button> */}
           <iframe
            style ={style}
               src={`https://www.youtube.com/embed/CPKqZB7C-cI`}
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen/>
            </div>
           <div className='bksrangkaian'>
                <div className='bks'>Galery</div>
           </div>
           <div className='App'>
             <SimpleReactlightbox>
             <div className='grid'>
               <SRLWrapper options={options}>
              <img alt='imgbg1'src='https://i.ibb.co/j64bvBv/bambang10.jpg'/>
              <img alt='berpegang teguh dengan komitmen'src='https://i.ibb.co/LkpSpQx/bambang4.png'/> 
              <img alt='imgbg3'src='https://i.ibb.co/BP4hbDS/bambang3.jpg'/>
              <img alt='imgbg4'src='https://i.ibb.co/my1ShF5/bambang11.jpg'/>
              <img alt='imgbg5'src='https://i.ibb.co/1ZNr8Dy/bambang5.jpg'/>
              <img alt='imgbg6'src='https://i.ibb.co/tKVvzY7/bambang12.jpg'/> 
              <img alt='imgbg7'src='https://i.ibb.co/FzwjTb7/bambang7.png'/>
              <img alt='imgbg8'src='https://i.ibb.co/9yzsrRv/bambang8.jpg'/>
              <img alt='imgbg9'src='https://i.ibb.co/NYbSFd0/bambang9.jpg'/>
              <img alt='imgbg10'src='https://i.ibb.co/XtHgLGF/bambang1.jpg'/>
              <img alt='imgbg11'src='https://i.ibb.co/hdchMMS/bambang2.jpg'/>
              <img alt='imgbg12'src='https://i.ibb.co/cYYHRx0/bambang6.jpg'/>
              </SRLWrapper>
           </div>

             </SimpleReactlightbox>


           </div>
       
        
         </div>
    

    )
}

export default Gallery;