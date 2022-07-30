import { Pledge } from "./Pledge";
import { useSelector } from "react-redux";

const About = ({ onConfirm }) => {
  const pledges = useSelector(state => state.pledge.items);

  return (
    <div className="about section-box">
    <h3 className="heading-tertiary">About this project</h3>
    <p className="text body-text">
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
      to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
      your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
    </p>
    <p className="text body-text about-margin-bottom">
      Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
      to allow notepads, pens, and USB sticks to be stored under the stand.
    </p>

    <div className="pledge-list">
      {
        pledges.map(p => 
          <Pledge 
            key={p.id} 
            id={p.id} 
            confirm={onConfirm}
          />
        )
      }
    </div>
  </div>
  )
}

export default About;