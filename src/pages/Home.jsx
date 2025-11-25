import TopSavedJobs from "../components/TopSavedJobs";
import Navbar from "../components/Navbar";
import TopRecentJobs from "../components/TopRecentJobs";
import MotivationBuddy from "../components/MotivationBuddy";

const Home = () => {
  return (
    <div className="bg-backgroundColor min-h-screen px-30 py-8">
      <Navbar />

      <main className="flex flex-row gap-8 items-start">
        {/* Jobs Dashboard */}

        <div className="w-3/5 rounded-[25px] bg-[#FBF9F3] shadow-md p-8">
          {/* Recent Applications Section */}
          <div className="flex flex-col">
            <TopRecentJobs />
          </div>
          {/* Saved Jobs Section */}
          <div className="flex flex-col mt-8">
            <TopSavedJobs />
          </div>
        </div>

        {/* Motivation Buddy Component */}
        <MotivationBuddy />
      </main>
    </div>
  );
};

export default Home;
