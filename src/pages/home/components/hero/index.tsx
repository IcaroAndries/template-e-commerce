import './style.sass'
import img1 from '../../../../../public/imgs/corgi1.jpg';
import img2 from '../../../../../public/imgs/corgi2.jpg';
import img3 from '../../../../../public/imgs/corgiCarente.jpg';
import img4 from '../../../../../public/imgs/corgiVesgo.jpg';

function Hero() {
  return (
    <div className='main-container'>
        <div className='feature image-1'>
            <img src={img1} alt="igão" />
            <caption>corgi1</caption>
        </div>
        <div className='feature image-2'>
            <img src={img2} alt="igão" />
            <caption>corgi2</caption>
        </div>
        <div className='feature image-3'>
            <img src={img3} alt="igão" />
            <caption>corgi3</caption>
        </div>
        <div className='feature image-4'>
            <img src={img4} alt="igão" />
            <caption>corgi4</caption>
        </div>
    </div>
  )
}

export default Hero