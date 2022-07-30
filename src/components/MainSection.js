import { useState } from 'react'
import Modal from './Modal';
import ModalThanks from './ModalThanks';
import Intro from './Intro';
import Stats from './Stats';
import About from './About';
import { useDispatch } from 'react-redux';
import { setSelected } from '../reducers/pledgeReducer';

const MainSection = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [thanksOpen, setThanksOpen] = useState(false);

  const toggleModal = () => setModalOpen(modalOpen => !modalOpen);
  const toggleThanksModal = () => setThanksOpen(thanksOpen => !thanksOpen);

  // After clicking 'continue' on modal
  const confirmModal = () => {
    dispatch(setSelected(-1));
    toggleModal();
    toggleThanksModal();
  }

  const closeThanks = () => toggleThanksModal();

  return (
  <main>
    <Modal isOpen={modalOpen} closeModal={toggleModal} openThanks={confirmModal} />
    <ModalThanks isOpen={thanksOpen} closeThanks={closeThanks}/>
    <div className="container">
      <section className="section-main">
        <Intro openModal={toggleModal} />
        <Stats />
        <About onConfirm={toggleModal}/>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/Isaiah-B">Isaiah</a>.
        </div>
      </section>
    </div>
  </main>
  )
}

export default MainSection;