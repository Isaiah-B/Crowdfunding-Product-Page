import { useSelector, useDispatch } from 'react-redux';
import { decrementReward, setSelected } from '../reducers/pledgeReducer';
import { addBacker, addMoney } from '../reducers/statsReducer';
import PledgeCta from './PledgeCta';

const Pledge = ({ id, isModal=false, confirm }) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.pledge.selected);
  const currentPledge = useSelector(state => state.pledge.items.find(item => item.id === id));

  const title = currentPledge.title;
  const amount = currentPledge.amount;
  const rewardsRemaining = currentPledge.rewardsRemaining;
  const description = currentPledge.description;

  const isActive = rewardsRemaining > 0;
  const activeCheck = isActive ? '' : ' inactive';
  const selectedCheck = selected === id ? ' selected' : '';

  // Pass id to parent selectPledge function
  const handleSelect = (id) => dispatch(setSelected(id));

  // Select chosen pledge tier and open the pledge modal
  const handleMainConfirm = (id) => {
    dispatch(setSelected(id));
    confirm(id);
  }

  const handleModalConfirm = (event, inputAmount) => {
    event.preventDefault();
    
    dispatch(addBacker());
    dispatch(decrementReward(id));
    dispatch(addMoney(inputAmount));
    confirm();
  }

  const onPledgeClick = (id) => {
    if (isActive) {
      dispatch(setSelected(id));
    }
  }

// Main page pledge
  if (!isModal) {
    return (
    <div className={`pledge section-box${activeCheck}`}>
      <div className="pledge-top-row">
        <h4 className="heading-quaternary">{title}</h4>
        <span className="pledge-amount">Pledge ${amount} or more</span>
      </div>
      <p className="text body-text pledge-text-margin">{description}</p>
      <div className="pledge-bottom-row">
        <div className="pledge-left-wrapper">
          <span className="number-large">{rewardsRemaining}</span>
          <span className="text">left</span>
        </div>
        <button 
          className="btn btn-main btn-small" 
          onClick={() => handleMainConfirm(id)} 
          disabled={!isActive}
        >
            {`${isActive ? 'Select Reward' : 'Out of stock'}`}
        </button>
      </div>
    </div>
    )
  }

// Modal pledge
  return (
    <div id={id} className={`pledge-modal-wrap${activeCheck}${selectedCheck}`}>
      <div className='pledge pledge-modal' onClick={() => onPledgeClick(id)}>
        <div className='radio-wrapper'>
          <input 
            type='radio' 
            name='modal-radio' 
            className='pledge-radio' 
            onClick={() => handleSelect(id)} 
            disabled={rewardsRemaining <= 0}>
          </input>
        </div>
          <div className='pledge-top-row-left'>
            <h4 className="heading-quaternary">{title}</h4>
            <span className="pledge-amount">Pledge ${amount} or more</span>
          </div>
          <div className="pledge-left-wrapper">
            <span className="number-large">{rewardsRemaining}</span>
            <span className="text">left</span>
          </div>
          <p className="text body-text">{description}</p>
      </div>
      <PledgeCta amount={amount} action={handleModalConfirm}/>
    </div>
  )
}


const PledgeNoReward = ({ id, confirm }) => {
  const dispatch = useDispatch()
  const selected = useSelector(state => state.pledge.selected);
  
  const selectedCheck = selected===id ? ' selected' : '';
  
  const handleSelect = () => dispatch(setSelected(id));
  
  const handleNoRewardConfirm = (event, inputAmount) => {
    event.preventDefault();

    dispatch(addBacker());
    dispatch(setSelected(id));
    dispatch(addMoney(inputAmount));
    confirm();
  }
  
  return (
    <div className={`pledge-modal-wrap${selectedCheck}`} onClick={() => handleSelect(id)}>
      <div className='pledge pledge-modal no-reward'>
        <div className='radio-wrapper'>
          <input 
            type='radio' 
            name='modal-radio' 
            className='pledge-radio' 
            onClick={() => handleSelect(id)}>
          </input>
        </div>
          <h4 className="heading-quaternary">Pledge with no reward</h4>
          <p className="text body-text">
            Choose to support us without a reward if you simply believe in our project. 
            As a backer, you will be signed up to receive product updates via email.
          </p>
      </div>
      <PledgeCta amount={1} action={handleNoRewardConfirm} />
    </div>
  )
}

export {Pledge, PledgeNoReward};