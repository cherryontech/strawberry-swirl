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
    <div className=" overflow-x-auto flex flex-col justify-start items-start min-h-screen w-full rounded-2xl bg-linear-to-r from-gray-50 to-white shadow-md hover:border-2 hover:border-solid hover:border-blue-500">
      {/* Application Form */}
      <div>
        <h2 className="ml-8 mt-5 text-2xl font-lora hover:underline hover:decoration-blue-500 ">
          Add your job application details here.
        </h2>
      </div>
      <div className="flex xl:flex-row flex-col justify-around gap-2 p-6 rounded-xl w-11/12 ml-8 mt-1 bg-linear-to-r from-gray-50 to-white shadow-md hover:border-2 hover:border-solid hover:border-blue-500 font-lora">
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
          className="px-3 py-1 bg-linear-to-r from-gray-50 to-white shadow-md hover:border-2 hover:border-solid hover:border-blue-500 rounded-3xl"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>

      {/* Application List */}
      <h2 className="ml-8 mt-5 text-2xl font-lora hover:underline hover:decoration-blue-500 ">
        Recent Applications
      </h2>
      <div className="w-11/12  bg-rose-100 rounded-xl shadow-md p-4 overflow-x-auto text-sm ml-8 mt-1 bg-linear-to-r from-gray-50 to-white hover:border-2 hover:border-solid hover:border-blue-500 font-lora">
        {applications.length > 0 && (
          <table className="m-4 border-collapse border-none w-11/12 md:w-11/12 md:text-sm  text-left text-sm">
            <thead>
              <tr className="hover:border-blue-500 hover:border-2 border-b border-gray-200">
                <th className="border-0 font-normal px-4 py-2">company</th>
                <th className="border-0 font-normal px-4 py-2">job title</th>
                <th className="border-0 font-normal px-4 py-2">status</th>
                <th className="border-0 font-normal px-4 py-2">date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="hover:border-blue-500 hover:border-2 border-b border-gray-200"
                >
                  <td className="border-0 font-normal px-4 py-2">
                    {app.companyName}
                  </td>
                  <td className="border-0 font-normal px-4 py-2">{app.role}</td>
                  <td className="border-0 font-normal px-4 py-2">
                    {app.status}
                  </td>
                  <td className="border-0 font-normal px-4 py-2">{app.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <h2 className="ml-8 mt-5 text-2xl font-lora hover:underline hover:decoration-blue-500 ">
        Saved Jobs
      </h2>
      <div className="w-11/12  bg-rose-100 rounded-xl shadow-md p-4 overflow-x-auto text-sm ml-8 mt-1 bg-linear-to-r from-gray-50 to-white hover:border-2 hover:border-solid hover:border-blue-500 font-lora">
        <table className="m-4 border-collapse border-none w-11/12 md:w-11/12 md:text-sm  text-left text-sm">
          <thead>
            <tr className="hover:border-blue-500 hover:border-2 border-b border-gray-200">
              <th className="border-0 font-normal px-4 py-2">company</th>
              <th className="border-0 font-normal px-4 py-2">job title</th>
              <th className="border-0 font-normal px-4 py-2">status</th>
              <th className="border-0 font-normal px-4 py-2">date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:border-blue-500 hover:border-2 border-b border-gray-200">
              <td className="border-0 font-normal px-4 py-2">company</td>
              <td className="border-0 font-normal px-4 py-2">job title</td>
              <td className="border-0 font-normal px-4 py-2">status</td>
              <td className="border-0 font-normal px-4 py-2">date</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationForm;
