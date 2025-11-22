import feather from "../assets/feather.png";
import ember from "../assets/ember.png";
import egg from "../assets/egg.png";
import babyPhoenix from "../assets/baby_phoenix.png";
import adultPhoenix from "../assets/adult_phoenix.png";
import { ValidationStrategy as PropTypes } from "@eslint/object-schema";

export default function MotivationIcon({ applicationsCount }) {
  let icon = feather;

  if (applicationsCount >= 50) {
    icon = adultPhoenix;
  } else if (applicationsCount >= 35) {
    icon = babyPhoenix;
  } else if (applicationsCount >= 20) {
    icon = egg;
  } else if (applicationsCount >= 10) {
    icon = ember;
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="w-52 h-52 rounded-full bg-backgroundColor flex items-center justify-center">
        <img src={icon} alt="Motivation Buddy icon" />
      </div>
    </div>
  );
}

MotivationIcon.propTypes = {
  applicationsCount: PropTypes.number.isRequired,
};
