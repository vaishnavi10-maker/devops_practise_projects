import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  
  const addData = () => {
  fetch("http://localhost:3000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Harshu",
      role: "DevOps Learner"
    })
  })
    .then(res => res.text())
    .then(data => alert(data));
};
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Frontend 🚀</h1>

      {data ? (
        <div>
          <h2>Name: {data.name}</h2>
          <h3>Role: {data.role}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
	<button onClick={addData}>Add Data</button>
    </div>

  );
}

export default App;
