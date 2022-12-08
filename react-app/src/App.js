// import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from 'react-pageflip';
import cover from './media/cover.png';
import circles from './media/circles.png';
import magnetic2 from './media/magnetic2.png';
import matrix1 from './media/matrix1.png';
import matrix2 from './media/matrix2.png';
import HY from './media/HY.jpg';
import back from './media/back.png';

function MyBook(props) {
    return (
        <HTMLFlipBook width={500} height={648} className="zine">
            <div className="hiddenpage"></div>

            <div className="page">
                <img src={cover} alt="cover page" style={{ width: '500px',}}/> 
            </div>

            <div className="page"> page 1 design needed </div>

            <div className="page">
                <img src={circles} alt="circles page" style={{ width: '500px',}}/>
            </div>

            <div className="page">
                <img src={HY} alt="HY pattern" style={{ width: '500px', }}/>
            </div>

            <div className="page">i feel like a black background one should go here </div>

            <div className="page">
                <img src={matrix1} alt="matrix" style={{ width: '500px',}}/>
            </div>

            <div className="page">
                <img src={matrix2} alt="matrix" style={{ width: '500px',}}/>
            </div>

            <div className="page">
                <img src={magnetic2} alt="magnetic page" style={{ width: '500px',}}/>
            </div>
            
            <div className="page">page</div>
            
            <div className="page">
                <img src={back} alt="back cover" style={{ width: '500px',}}/>
            </div>
            <div className="hiddenpage"></div>
        </HTMLFlipBook>
    );
}

export default MyBook;
