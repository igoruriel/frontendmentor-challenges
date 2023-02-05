import './Card.css';
import qrCodeImg from '../../assets/images/image-qr-code.png';

const Card = () => {
  return (
    <article className='card'>
      <div className='card-container'>
        <div className='card-img'>
          <img className='qr-code-img' src={qrCodeImg} alt='qr-code' />
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <h1>Improve your front-end skills by building projects</h1>
          </div>
          <p className='card-text'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </article>
  );
};
export default Card;
