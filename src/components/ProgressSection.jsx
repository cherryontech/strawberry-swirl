import { ValidationStrategy as PropTypes } from "@eslint/object-schema";

export default function ProgressSection({ applicationsCount, total }) {
  const ratio = applicationsCount / total;

  return (
    <div className="mt-4">
      <p className="text-base font-light mb-2">Progress</p>

      <div className="h-6 w-full bg-darkBeige rounded-full overflow-hidden">
        <div
          className="h-full bg-accentOrange rounded-full"
          style={{ width: `${Math.min(ratio * 100, 100)}%` }}
        ></div>
      </div>

      <p className="mt-3 text-bordeaux text-center text-sm">
        You&apos;ve applicationsCount to {applicationsCount} out of {total} jobs!
      </p>
    </div>
  );
}

ProgressSection.propTypes = {
  applicationsCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
