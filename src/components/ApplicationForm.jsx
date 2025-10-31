import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ApplicationForm = () => {
  const [applications, setApplications] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const storedApps = localStorage.getItem("applications");
    if (storedApps) {
      setApplications(JSON.parse(storedApps));
    }
  }, []);

  const handleAddClick = () => {
    const updatedApps = [
      ...applications,
      { id: uuidv4(), companyName, role, status, date },
    ];
    setApplications(updatedApps);

    localStorage.setItem("applications", JSON.stringify(updatedApps));
    setCompanyName("");
    setRole("");
    setStatus("");
    setDate("");

    console.log(localStorage.getItem("applications"));
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen rounded-2xl bg-amber-50">
      {/* Application Form */}
      <div>
        <h2 className="text-2xl font-bold m-4 text-center ">
          Add your job application details here.
        </h2>
      </div>
      <div className="bg-rose-100 flex xl:flex-row flex-col justify-around gap-2 p-6 rounded-xl w-11/12 shadow-md mb-8">
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="p-2 border-2 rounded-md bg-white w-full"
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-2 border-2 rounded-md bg-white w-full"
        />

        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border-2 rounded-md bg-white w-full"
        >
          <option value="">Select Status</option>
          <option value="Saved"> Saved</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Rejected">Rejected</option>
          <option value="Offers">Offers</option>
        </select>

        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border-2 rounded-md bg-white w-full"
        />
        <button
          className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition cursor-pointer"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>

      {/* Application List */}
      <h2 className="text-2xl font-bold mb-2 text-center ">
        Recent Applications
      </h2>
      <div className="w-11/12  bg-rose-100 rounded-xl shadow-md p-4 overflow-x-auto text-sm">
        {applications.length > 0 && (
          <table className="mt-6 border-collapse border min-w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Company Name</th>
                <th className="border px-4 py-2">Role</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="border px-4 py-2">{app.companyName}</td>
                  <td className="border px-4 py-2">{app.role}</td>
                  <td className="border px-4 py-2">{app.status}</td>
                  <td className="border px-4 py-2">{app.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
