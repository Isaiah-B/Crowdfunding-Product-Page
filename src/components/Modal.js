import { useSelector } from "react-redux"
import { Pledge, PledgeNoReward } from "./Pledge"


const Modal = ({ isOpen, closeModal, openThanks }) => {
  const pledges = useSelector(state => state.pledge.items);

  const checkOpen = isOpen ? ' open' : '';

  return (
    <div className={`modal-container${checkOpen}`}>
      <div className="modal">
        <div className="modal-close-wrap">
          <button className="modal-btn-close" onClick={closeModal}>
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 
                11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" 
                fill="#000" fillRule="evenodd" opacity=".4"/>
            </svg>
          </button>
        </div>
        <div className="modal-content">
          <h3 className="heading-tertiary">Back this project</h3>
          <p className="text body-text modal-text">
            Want to support us in bringing Mastercraft 
            Bamboo Monitor Riser out in the world?
          </p>
          <div id="modal-pledge-list" className="pledge-list">
            <PledgeNoReward id={0} confirm={openThanks}/>
            {
              pledges.map(p => 
                <Pledge key={p.id} 
                  id={p.id}
                  isModal={true} 
                  confirm={openThanks}
                />
              )
            } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;