import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Step3 = () => {
  const [value, setValue] = useState<any>(0);

  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/3", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ bedOut: value })
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate("/4");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-slate-800 grid place-items-center">
      <div>
        <p className="mb-8 text-white">What time do you get out of bed ?</p>
        <form onSubmit={submitHandler}>
          <input
            type="number"
            name="bed out"
            id="bed out"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
          <label className="text-white ml-2" htmlFor="bed out">
            24 hrs format
          </label>
          <div className="mt-6">
            <button className="p-4 bg-yellow-700 rounded-full text-white">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
