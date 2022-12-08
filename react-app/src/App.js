// import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from 'react-pageflip';
import magnetic from './media/magnetic.png';
import image1 from './media/patterns-01.jpg';

function MyBook(props) {
    return (
        <HTMLFlipBook width={500} height={648} className="zine">
            <div className="page">first page </div>
            <div className="page">
                <img src={magnetic} alt="magnetic page" style={{ width: '500px',}}/>
            </div>
            <div className="page">Page 2
                {/* <div class="ring">
                    <ul>
                        <li id="lost">lost</li>
                        <li id="in">in</li>
                        <li id="space">space</li>
                    </ul>
                </div> */}
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
