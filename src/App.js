import "./styles.css";
import { useState } from "react";

export default function App() {
  const data = [
    { id: 1, name: "John Doe", age: 25, role: "Developer" },
    { id: 2, name: "Jane Smith", age: 30, role: "Designer" },
    { id: 3, name: "Sam Wilson", age: 28, role: "Manager" },
    { id: 4, name: "Sara Connor", age: 35, role: "Tester" },
  ];
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <h1>Filter Table</h1>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div>
          <label>Name: </label>
          <select onChange={handleChange}>
            <option value="">All</option>
            <option value="1">Sunil</option>
            <option value="2">Rahul</option>
            <option value="3">Rohan</option>
            <option value="4">Muno</option>
          </select>
        </div>
      </div>
      <div className="table">
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.length > 0 ? (
              filteredData?.map((val) => (
                <tr>
                  <td>{val?.id}</td>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.role}</td>
                </tr>
              ))
            ) : (
              <div>No data found!</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
