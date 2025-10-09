import { useEffect, useState } from "react";

const ApplicationForm = () => {
  const [applications, setApplications] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedApps = localStorage.getItem("applications");
    if (storedApps) {
      setApplications(JSON.parse(storedApps));
    }
  }, []);

  const handleAddClick = () => {
    const updatedApps = [...applications, { companyName, role }];
    setApplications(updatedApps);

    localStorage.setItem("applications", JSON.stringify(updatedApps));
    setCompanyName("");
    setRole("");

    console.log(localStorage.getItem("applications"));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-rose-50">
      {/* Application Form */}
      <div className="bg-rose-100 flex gap-4 p-6 rounded-xl shadow-md mb-8">
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="p-2 border-2 rounded-md bg-white"
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-2 border-2 rounded-md bg-white"
        />
        <button
          className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>

      {/* Application List */}
      <div className="w-full max-w-md bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2 text-center">
          List of Applications
        </h2>

        <ul>
          {applications.map((app, index) => (
            <li
              key={index}
            >{`Company Name: ${app.companyName} | Role: ${app.role}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApplicationForm;
