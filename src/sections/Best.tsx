import glenn from "../assets/glenn.png";

import medal_1 from "../assets/1.svg";
import medal_2 from "../assets/2.svg";
import medal_3 from "../assets/3.svg";

const Best = () => {
  return (
    <section className="s-best" id="best">
      <div className="best">
        <div>
          <p className="section__title">Best Employee</p>
          <h2 className="section__desc">Employee of the CENTURY</h2>
          <ul className="list-disc py-6">
            <li className="best__list">
              <img src={medal_1} alt="Achievement 1" />
              <div>
                <span>Glenn Castillo</span>
                <p>Outstanding achievements description goes here.</p>
              </div>
            </li>
            <li className="best__list">
              <img src={medal_2} alt="Leadership" />
              <div>
                <span>John Rovic Lalusin</span>
                <p>Leadership qualities description goes here.</p>
              </div>
            </li>
            <li className="best__list">
              <img src={medal_3} alt="Consistent Performance" />
              <div>
                <span>Micko Jasareno</span>
                <p>Consistent performance description goes here.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="best__employee">
          <figure>
            <img src={glenn} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Glenn Castillo</h2>
            <p>
              Kamusta! I'm Glenn, a Software Engineer specialized in Python
              Programming. I specialize in developing innovative business
              solutions that drive impact to business operations. I'm passionate
              about crafting scalable, well-structured code following best
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
