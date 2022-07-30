const ModalThanks = ({ isOpen, closeThanks }) => {
  const checkOpen = isOpen ? ' open' : '';

  return (
  <div className={`modal-container modal-thanks-container${checkOpen}`}>
    <div className="modal modal-thanks">
      <div className="icon-check-wrap">
        <img className="icon-check" src="images/icon-check.svg" alt="Checkmark" />
      </div>
      <h2 className="heading-secondary">Thanks for your support!</h2>
      <p className="text body-text">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
        an email once our campaign is completed.
      </p>
      <div className="thanks-btn-wrap">
        <button className="btn btn-main btn-small" onClick={closeThanks}>Got it!</button>
      </div>
    </div>
  </div>
  )
}

export default ModalThanks;