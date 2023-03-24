import './style.sass'
import img1 from '~images/corgi1.jpg';
import img2 from '~images/corgi2.jpg';
import img3 from '~images/corgiCarente.jpg';
import img4 from '~images/corgiVesgo.jpg';

function Hero() {
  return (
    <div className='main-container'>
        <div className='feature image-1'>
            <img src={img1} alt="igão" />
            <p>corgi1</p>
        </div>
        <div className='feature image-2'>
            <img src={img2} alt="igão" />
            <p>corgi2</p>
        </div>
        <div className='feature image-3'>
            <img src={img3} alt="igão" />
            <p>corgi3</p>
        </div>
        <div className='feature image-4'>
            <img src={img4} alt="igão" />
            <p>corgi4</p>
        </div>
    </div>
  )
}

export default Hero