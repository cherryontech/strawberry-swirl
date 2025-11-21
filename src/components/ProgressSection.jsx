export default function ProgressSection({ applied, total }) {
  const ratio = applied / total;

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
        You&apos;ve applied to {applied} out of {total} jobs!
      </p>
    </div>
  );
}
