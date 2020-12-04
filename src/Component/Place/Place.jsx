import React,{useState,Fragment} from 'react';
import './Place.css';
import place from '../../Assets/image/bgimage.jpg';
import Modal from './Modal';
import { useParams} from 'react-router-dom';



const Place =()=>{

    const {nama}=useParams();
    console.log(nama);
    
    const[isModalOpened,setIsModalOpened]=useState(false);
    const[selectON,setSelectON]=useState(false);
    const[setjam,setStatejam]=useState('');
    const[settamu,setStatetamu]=useState('tidak ada');
    
   
    
   

    

    return(

        <div className='wrapcover'>
           <img className='img2' alt='img2' src={place}/>
           <div className='bksrangkaian'>
                <div className='bksrangkaian1'>Rangkaian Acara</div>
           </div>
           <div className='bksrangkaianakad'>
               <div className='bksrangkaianakadborder'>   
                   </div>
               <div className='bksrangkaianakad1'>
                    <label className='txtakad'>Akad</label>
               </div>

                   <div className='bksrangkaianakadborder'>
                   
                   </div>
           </div>
           <div className='bksrangkaianakaddetail'>

           <div className='bksrangkaianakadborderdetail1'> 
                     <div className='bkshari'>
                        <label className='txthari'>SABTU</label>
                    </div>
                    <div className='bkshari'>
                    <img className='imgharilist' alt='imgharilist' src='https://i.ibb.co/fdmtjh7/list.png'/>
                    </div>    
                    <div className='bkshari'>
                        <label className='txtpkl'>16.00 S/D 17.00 WIB</label>
                    </div>   
            </div>
               <div className='bksrangkaianakadborderdetail2'>
                    <label className='txttanggal'>09</label>
               </div>

                   <div className='bksrangkaianakadborderdetail3'>
                   <div className='bkshari1'>
                        <label className='txtbulan'>JANUARY</label>
                    </div>
                    <div className='bkshari1'>
                    <img className='imgtahunlist' alt='imgtahunlist' src='https://i.ibb.co/fdmtjh7/list.png'/>
                    </div>     
                    <div className='bkshari1'>
                        <label className='txttahun'>2021</label>
                    </div> 
                   </div>
           </div>

           <div className='bksrangkaianjalanakad'>
                <div className='bksrangkaianjalanakad1'><b>SASONO MULYO - DEPOK</b></div>
           </div>
           <div className='bksrangkaianjalandetailakad'>
                <div className='bksrangkaianjalandetailakad1'>Jl. Jatimulya (Kalimulya) No. 30, Cilodong, Depok Jawa Barat</div>
           </div>
            
           <div className='bksrangkaianresepsi'>
               <div className='bksrangkaianresepsiborder'>   
                   </div>
               <div className='bksrangkaianresepsi1'>
                    <label className='txtresepsi'>Resepsi</label>
               </div>

                   <div className='bksrangkaianresepsiborder'>
                   
                   </div>
           </div>
           <div className='bksrangkaianresepsidetail'>

           <div className='bksrangkaianresepsiborderdetail1'> 
                    <div className='bkshariresepsi'>
                        <label className='txthariresepsi'>SABTU</label>
                    </div>
                    <div className='bkshariresepsi'>
                    <img className='imgtahunresepsilisthari' alt='imgtahunresepsilisthari' src='https://i.ibb.co/fdmtjh7/list.png'/>
                    </div>    
                    <div className='bkshariresepsi'>
                        <label className='txtpklresepsi'>19.00 S/D 20.00 WIB</label>
                    </div>  
            </div>
               <div className='bksrangkaianresepsiborderdetail2'>
                    <label className='txttanggalresepsi'>09</label>
               </div>

                   <div className='bksrangkaianresepsiborderdetail3'>
                   <div className='bkshariresepsi1'>
                        <label className='txtbulanresepsi'>JANUARY</label>
                    </div>
                    <div className='bkshariresepsi1'>
                    <img className='imgtahunresepsilist' alt='imgtahunresepsilist' src='https://i.ibb.co/fdmtjh7/list.png'/>
                    </div>    
                    <div className='bkshariresepsi1'>
                        <label className='txttahunresepsi'>2021</label>
                    </div> 
                   </div>
           </div>
           <div className='bksrangkaianjalanresepsi'>
                <div className='bksrangkaianjalanresepsi'><b>SASONO MULYO - DEPOK</b></div>
           </div>
           <div className='bksrangkaianjalandetailresepsi'>
                <div className='bksrangkaianjalandetailresepsi'>Jl. Jatimulya (Kalimulya) No. 30, Cilodong, Depok Jawa Barat</div>
           </div> 
          

           <div className='form1'>
            <button className="btnopeng" onClick={event =>  window.location.href='https://goo.gl/maps/xvyf6YvwSCZGx3D49'}>Denah Lokasi</button>
            </div>
            <Fragment>
            <div className='form2'>
            {/* <button className="btnopenrsvp" onClick={event =>  window.location.href='https://api.whatsapp.com/send?phone=6281367649724&text=Halo%20Saya%20Akan%20Datang%20KePernikahan%20anda'}>Konfirmasi Kehadiran</button> */}
            <button className="btnopenrsvp" onClick={event =>  setIsModalOpened(true)}>Konfirmasi Kehadiran</button>
            </div>
            {
                isModalOpened &&
                <Modal title='Konfirmasi Kehadiran' jam={setjam} tamu={settamu} value={nama.toUpperCase()} duration={400} onClose={()=>setIsModalOpened(false)}>
                       <div className='bksmodal'>
                        <div className='formpopup'>
                            
                            <div className='labelnamaku'>
                                <label className='lblnama'>Nama</label>
                            </div>
                            <div className='labelnamaku'>
                                <input className='txtnama' value={nama.toUpperCase()} disabled></input>
                            </div>
                        </div>
                        <div className='formpopupkdtg'>
                            <div className='labelkdtg'>
                                <label className='lblkdtg'>Jam&emsp;</label>
                            </div>
                            <div className='labelkdtg'>
                            <select className='txtkdtg' onChange={(e)=>{
                                    const selectedOn=e.target.value;
                                    console.log(selectedOn)
                                    
                                    if (selectedOn === 'Maaf%20Tidak%20Bisa%20Hadir' || selectedOn==='Select' )
                                     {
                                        setSelectON(false)
                                        setStatejam(selectedOn)
                                      } else {
                                        setSelectON(selectedOn)
                                        setStatejam(selectedOn)
                                      }
                                    
                                }}>
                                <option value="Select" >Pilih Jam</option>
                                <option value="19.00-20.00">19.00 - 20.00</option>
                                <option value="20.00-21.00">20.00 - 21.00</option>
                                <option value="Maaf%20Tidak%20Bisa%20Hadir">Tidak Bisa Hadir</option>
                            </select>
                            </div>
                        </div>
                      {selectON && <div className='formpopupkdtg'>
                            <div className='labelkdtg'>
                                <label className='txttamu'>Tamu&emsp;</label>
                            </div>
                            <div className='labelkdtg'>
                            <select className='txtkdtg'onChange={(e)=>{
                                    const selectedTamu=e.target.value;
                                    console.log(selectedTamu)
                                    setStatetamu(selectedTamu)
                                    
                                }}>
                                <option value="Select">Tamu Yang Akan Hadir</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            </div>
                            </div>
}
                        </div>
                        
                            
                </Modal>
                
            }
            </Fragment>

    
         </div>




    

    )
}



export default Place;