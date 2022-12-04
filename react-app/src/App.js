// import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from 'react-pageflip';
import test from './media/test.png'
import image1 from './media/patterns-01.jpg';

function MyBook(props) {
    return (
        <HTMLFlipBook width={500} height={648} className="zine">
            <div className="page">Page 1 </div>
            <div className="page">Page 2
            <div id="circle">
	            </div>
            </div>
            <div className="page">
                <img src={test} alt="test" style={{ width: '500px', }}/>
            </div>
            <div className="page">Page 3</div>
            <div className="page">
                <img src={image1} alt="test" style={{ width: '500px', }}/>
            </div>
            <div className="page">Page 3</div>
            <div className="page">Page 3</div>
        </HTMLFlipBook>
    );
}

export default MyBook;
