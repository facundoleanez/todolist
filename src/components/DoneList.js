import React from "react";

function DoneList() {
  return (
    <div className="bg-light p-2 mt-5 rounded shadow">
      <h1 className="text-success text-center my-2">It's done!</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">Lucnch</li>
        <li className="list-group-item">Dinner</li>

        <li className="list-group-item">Groceries</li>
        <li className="list-group-item">Walk</li>
        <li className="list-group-item">Nap</li>
      </ul>
    </div>
  );
}
export default DoneList;
