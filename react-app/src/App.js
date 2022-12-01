// import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from 'react-pageflip';

function MyBook(props) {
    return (
        <HTMLFlipBook width={500} height={648} className="zine">
            <div className="page"><img src="blankblack.png" alt=""></img>Page 1</div>
            <div className="page">Page 2</div>
            <div className="page">Page 3</div>
            <div className="page">Page 4</div>
        </HTMLFlipBook>
    );
}

export default MyBook;
