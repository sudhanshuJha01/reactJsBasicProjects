import React, { useEffect, useState } from 'react';

const url = 'https://picsum.photos/v2/list?page=1&limit=10';

function App() {
  const [imagesArray, setImagesArray] = useState([]);
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setImagesArray(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleLeftCounter = () => {
    setCnt(prevCnt => (prevCnt > 0 ? prevCnt - 1 : imagesArray.length - 1));
  };

  const handleRightCounter = () => {
    setCnt(prevCnt => (prevCnt < imagesArray.length - 1 ? prevCnt + 1 : 0));
  };

  return (
    <>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Gallery</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className='container'>
        <div className='buttons'>
          <span onClick={handleLeftCounter}><SquareArrowLeft02Icon className="leftButton" /></span>
          <span onClick={handleRightCounter}><SquareArrowRight02Icon className='rightButton' /></span>
        </div>
        <div className='image-card'>
          {imagesArray.length > 0 && (
            <img className='image' src={imagesArray[cnt].download_url} alt={imagesArray[cnt].author} />
          )}
        </div>
      </div>
    </>
  );
}

const SquareArrowLeft02Icon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"white"} fill={"none"} {...props}>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12L16 12M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SquareArrowRight02Icon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"white"} fill={"none"} {...props}>
    <path d="M16 12L8 12M16 12C16 11.2998 14.0057 9.99153 13.5 9.5M16 12C16 12.7002 14.0057 14.0085 13.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default App;
