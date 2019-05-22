
import colors from '../lib/colors';
import { FaPaw } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <div id='hero'>
        <h3 className="text">Hi, I'm Ellie <FaPaw /></h3>
      </div>
      <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 400px;
        background: ${colors.gray[2]};
      }
      .text {
        max-width: 50%;
      }
      h3 {
        font-size: 40px;
      }
      .item--top {
        align-self: flex-start;
      }
      
      .item--bottom {
        align-self: flex-end;
      }
    `}</style>
    </>
  );
}

export default Hero;
