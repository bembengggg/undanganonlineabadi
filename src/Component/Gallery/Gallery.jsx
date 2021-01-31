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
           <a href="https://www.youtube.com/embed/CPKqZB7C-cI">
             <img className='youtube' src="https://i.ibb.co/th72qrm/youtube.png" alt="youtube" border="0"></img>
            </a>
            </div>
           <div className='bksrangkaian'>
                <div className='bks'>Galery</div>
           </div>
           <div className='App'>
             <SimpleReactlightbox>
             <div className='grid'>
               <SRLWrapper options={options}>
              <img alt='Tetap Selalu Berjalanan Seiringan' src="https://i.ibb.co/BnJbKzd/bambang10.jpg"/>
              <img alt='Komitmen adalah Kunci dalam Hubungan' src="https://i.ibb.co/p2cwVmH/bambang4.jpg"/> 
              <img alt='Mencitaimu Bukan Karna siapa Kamu Tetapi Karena Siapa Aku Ketika Bersamamu' src="https://i.ibb.co/wK76Hz7/bambang3.jpg" />
              <img alt='Cinta adalah Tentang Keikhlasan' src="https://i.ibb.co/fqHMKWt/bambang11.jpg" />
              <img alt='Kebahagian akan selalu Menemani' src="https://i.ibb.co/xCzwz3N/bambang5.jpg" />
              <img alt='Sabar Menyikapi Segala Hal' src="https://i.ibb.co/PDT85Wn/bambang12.jpg" /> 
              <img alt='Bahagiamu akan selalu menjadi bahagiaku' src="https://i.ibb.co/SPpy1gy/bambang7.jpg" />
              <img alt='Aku Memilihmu Kamu Memilihku' src="https://i.ibb.co/mXZgYqJ/bambang8.jpg" />
              <img alt='Kenangan Akan Menjadi Guru Terbaik' src="https://i.ibb.co/zQ34FbS/bambang1.jpg" />
              <img alt='Rindu Akan Menjadi Temu' src="https://i.ibb.co/XzhfdNC/bambang9.jpg" />
              <img alt='Cinta Tidak bisa dilihat tapi dirasakan' src="https://i.ibb.co/cX9Jn9H/bambang2.jpg"/>
              <img alt='Tetap Bersama Sampai Maut Memisahkan' src="https://i.ibb.co/QCdprKb/bambang6.jpg" />
              </SRLWrapper>
           </div>

             </SimpleReactlightbox>


           </div>
       
        
         </div>
    

    )
}

export default Gallery;