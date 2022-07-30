const Intro = ({ openModal }) => {
  
  const addBookmarked = () => {
    const btn = document.querySelector('.btn-bookmark');
    const text = btn.lastChild;

    btn.classList.toggle('bookmarked');
    btn.classList.contains('bookmarked') ? text.textContent = 'Bookmarked' : text.textContent = 'Bookmark';
  }

  return (
  <div className="main-intro section-box">
    <h1 className="heading-primary">Mastercaft Bamboo Monitor Riser</h1>
    <p className="text body-text intro-text-margin-bottom">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
    <div className="intro-cta">
      <button className="btn btn-main" onClick={openModal}>Back this project</button>
      <button className="btn btn-bookmark" onClick={addBookmarked}>
        <svg className="bookmark-icon" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle fill="#2F2F2F" cx="28" cy="28" r="28"/>
            <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/>
          </g>
        </svg>    
        <span>Bookmark</span>
      </button>
    </div>
  </div>
  )
}

export default Intro;