import React,{useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal =({title,jam,tamu,children,onClose,value,duration=300,showCloseBtn})=>{
    const modal=useRef();
    const modalBg=useRef();
    const modalContent=useRef();
    
   
const konfirmasi=()=>{

    if (jam=='' || jam=='Select' ){
        alert('Silahkan Untuk Pilih Jam')

    }else if(jam!='select' && tamu==='Select' || tamu===''){
        alert('Silahkan Pilih Tamu yang Akan hadir')
    }
    else
    {
            window.location.href='https://api.whatsapp.com/send?phone=6281367649724&text=Nama:%20'+value+'%20%0AJam%20Hadir:%20 '+jam+' %20%0AJumlah%20Hadir:%20 '+tamu+' Orang'
    }
}
 

 useEffect(() => {
     document.body.style.overflow ='hidden';
     modal.current.classList.add('disable-click');
     modalBg.current.style.transitionDuration = duration+'ms';
     modalContent.current.style.transitionDuration=duration+'ms';
     setTimeout(()=>{
         modalBg.current.style.opacity=0.2;
         modalContent.current.style.opacity=1;
         modalContent.current.style.top=0;
     },20)
     setTimeout(()=>{
         modal.current.classList.remove('disable-click');

     },duration+20);
     return()=>{
         document.body.style.overflow='visible';
     }
 },[duration]);

 const modalCloseHandler=()=>{
     modal.current.classList.add('disable-click');
     modalBg.current.style.opacity=0;
     modalContent.current.style.opacity=0;
     modalContent.current.style.top='-100px';

   
    //  return console.log(')
     setTimeout(()=>{
         modal.current.classList.remove('disable-click');
         onClose();
     },duration)
 }
   
    return(
        <div className='modal' ref={modal}>
        <div className='modal_bg' onClick={modalCloseHandler} ref={modalBg}></div>
        <div className='modal_inner' ref={modalContent}>
            <div className='modal_head'>
                <h2>{title}</h2>
            </div>
                <div className='modal_body'>
                    {children}
                </div>
                    <div className='modal_foot'>
                            <button className='Konfirmasi' 
                            onClick={konfirmasi}
                            >Konfirmasi</button>
                    </div>
        </div>
     
     </div>
    );
}

Modal.propTypes={
    title:PropTypes.string.isRequired,
    children:PropTypes.node,
    onClose:PropTypes.func.isRequired,
    duration:PropTypes.number,
    showCloseBtn:PropTypes.bool,
    value:PropTypes.string.isRequired,
    jam:PropTypes.string.isRequired,
    tamu:PropTypes.string.isRequired
}







export default Modal;