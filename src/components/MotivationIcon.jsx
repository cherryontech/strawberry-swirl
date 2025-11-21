import feather from '../assets/feather.png';
import ember from '../assets/ember.png';
import egg from '../assets/egg.png';
import babyPhenix from '../assets/baby_phoenix.png';
import adultPhenix from '../assets/adult_phoenix.png';

export default function MotivationIcon({ applied }) {
  let icon = feather;

  if (applied >= 50) {
    icon = adultPhenix;
  } else if (applied >= 35) {
    icon = babyPhenix;
  } else if (applied >= 20) {
    icon = egg;
  } else if (applied >= 10) {
    icon = ember;
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="w-52 h-52 rounded-full bg-backgroundColor flex items-center justify-center">
        <img
          src={icon}
          alt="Motivation Buddy icon"
          className="w-42 h-42"
        />
      </div>
    </div>
  );
}