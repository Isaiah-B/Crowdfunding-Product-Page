import { useEffect, useState } from "react";

const PledgeCta = ({ amount, action }) => {
  const [inputVal, setInputVal] = useState(null);

  useEffect(() => {
    setInputVal(amount);
  }, [amount])

  return (
    <div className="pledge pledge-modal pledge-cta">
      <p className="text body-text">Enter your pledge</p>
      <form className="pledge-cta-right" onSubmit={(e) => action(e, inputVal)}>
        <div className="pledge-cta-input-wrap">
          <input 
            className="pledge-cta-input" 
            type="number" 
            min={amount} 
            defaultValue={amount} 
            onChange={({ target }) => setInputVal(parseInt(target.value))} 
          />
        </div>
        <button className="btn btn-main" type="submit">Continue</button>
      </form>
    </div>
  )
}

export default PledgeCta;