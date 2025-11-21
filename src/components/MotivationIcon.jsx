import feather from "../assets/feather.png";
import ember from "../assets/ember.png";
import egg from "../assets/egg.png";
import babyPhenix from "../assets/baby_phoenix.png";
import adultPhenix from "../assets/adult_phoenix.png";
import { ValidationStrategy as PropTypes } from "@eslint/object-schema";

export default function MotivationIcon({ applicationsCount }) {
  let icon = feather;

  if (applicationsCount >= 50) {
    icon = adultPhenix;
  } else if (applicationsCount >= 35) {
    icon = babyPhenix;
  } else if (applicationsCount >= 20) {
    icon = egg;
  } else if (applicationsCount >= 10) {
    icon = ember;
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="w-52 h-52 rounded-full bg-backgroundColor flex items-center justify-center">
        <img src={icon} alt="Motivation Buddy icon" className="w-42 h-42" />
      </div>
    </div>
  );
}

MotivationIcon.propTypes = {
  applicationsCount: PropTypes.number.isRequired,
};
