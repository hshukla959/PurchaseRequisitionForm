import React, { useState } from "react";

const ItemForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [quantityUOM, setQuantityUOM] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [tentativeCost, setTentativeCost] = useState("");
  const [costUOM, setCostUOM] = useState("");
  const [requisitionBy, setRequisitionBy] = useState("");
  const [expectedDate, setExpectedDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://localhost:7049/api/Items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName: itemName,
        itemQuantity: itemQuantity,
        quantityUOM: quantityUOM,
        make: make,
        model: model,
        tentativeCost: tentativeCost,
        costUOM: costUOM,
        requisitionBy: requisitionBy,
        expectedDate: expectedDate,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        console.error(error.message); // Handle any errors
      });

    // Clear the form fields after submission
    setItemName("");
    setItemQuantity("");
    setQuantityUOM("");
    setMake("");
    setModel("");
    setTentativeCost("");
    setCostUOM("");
    setRequisitionBy("");
    setExpectedDate("");
  };

  return (
    <div>
      <h4>Items</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Name:</label>
          <input
            type="text"
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Item Quantity:</label>
          <input
            type="number"
            className="form-control"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity UOM:</label>
          <input
            type="text"
            className="form-control"
            value={quantityUOM}
            onChange={(e) => setQuantityUOM(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Make:</label>
          <input
            type="text"
            className="form-control"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            className="form-control"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tentative Cost:</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={tentativeCost}
            onChange={(e) => setTentativeCost(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Cost UOM:</label>
          <input
            type="text"
            className="form-control"
            value={costUOM}
            onChange={(e) => setCostUOM(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Requisition by:</label>
          <input
            type="text"
            className="form-control"
            value={requisitionBy}
            onChange={(e) => setRequisitionBy(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Expected Date:</label>
          <input
            type="date"
            className="form-control"
            value={expectedDate}
            onChange={(e) => setExpectedDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
