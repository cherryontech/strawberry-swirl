import PropTypes from "prop-types";
import feather from "../assets/feather.png";
import ember from "../assets/ember.png";
import egg from "../assets/egg.png";
import babyPhoenix from "../assets/baby_phoenix.png";
import adultPhoenix from "../assets/adult_phoenix.png";

function getStageIcon(applicationsCount) {
  if (applicationsCount >= 50) return adultPhoenix;
  if (applicationsCount >= 35) return babyPhoenix;
  if (applicationsCount >= 20) return egg;
  if (applicationsCount >= 10) return ember;
  return feather;
}

function getNextStageTarget(applicationsCount) {
  const thresholds = [10, 20, 35, 50];
  return thresholds.find((t) => t > applicationsCount);
}

export default function MotivationBuddySummary({ applicationsCount }) {
  const icon = getStageIcon(applicationsCount);
  const nextStageTarget = getNextStageTarget(applicationsCount);

  // Already at the final stage
  if (nextStageTarget === undefined) {
    return (
      <div className="rounded-3xl bg-white shadow-md px-12 py-6 flex flex-col items-center text-center">
        <img src={icon} alt="Motivation Buddy stage icon" className="h-12" />
        <p className="text-deepOrange text-lg font-medium mt-2">
          You&apos;ve rizen!
        </p>
        <p className="text-deepOrange text-lg font-medium mt-2 leading-[1.2]">
          You are unstoppable!
        </p>
      </div>
    );
  }

  const remaining = nextStageTarget - applicationsCount;
  const label = remaining === 1 ? "Application" : "Applications";

  return (
    <div className="rounded-3xl bg-white shadow-md px-12 py-6 flex flex-col items-center text-center">
      <img src={icon} alt="Motivation Buddy stage icon" className="h-12" />
      <p className="text-deepOrange text-lg font-medium leading-[1.2] mt-2">
        {remaining}
        <br />
        {label}
      </p>
      <p className="text-bordeaux text-base leading-[1.2] mt-3">
        until you reach
        <br />
        the next stage!
      </p>
    </div>
  );
}

MotivationBuddySummary.propTypes = {
  applicationsCount: PropTypes.number.isRequired,
};
