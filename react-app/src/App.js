// import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from 'react-pageflip';
import circles from './media/circles.png';
import magnetic from './media/magnetic.png';
import HY from './media/HY.jpg';

function MyBook(props) {
    return (
        <HTMLFlipBook width={500} height={648} className="zine">
            <div className="page">first page </div>
            <div className="page">
                <img src={circles} alt="circles page" style={{ width: '500px',}}/>
            </div>
            <div className="page">
                <img src={HY} alt="HY pattern" style={{ width: '500px', }}/>
            </div>
            <div className="page">a black one should go here </div>
            <div className="page">
                <img src={magnetic} alt="magnetic page" style={{ width: '500px',}}/>
            </div>

            <div className="page"> page </div>
            <div className="page">Page 3</div>
            
            <div className="page">Page 3</div>
            <div className="page">Page 3</div>
        </HTMLFlipBook>
    );
}

export default MyBook;
