import React from "react";

export default function Modal({ modalOpen, onClose, onSubmit, formData, onInputChange, error }) {
  if (!modalOpen) return null;

  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-[400px]">
        <h2 className="text-lg font-bold mb-5">Add Menu Details</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Menu Name</label>
          <input
            type="text"
            name="menuName"
            value={formData.menuName}
            onChange={onInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Menu Description</label>
          <input
            type="text"
            name="menuDescription"
            value={formData.menuDescription}
            onChange={onInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={onInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Item Description</label>
          <input
            type="text"
            name="itemDescription"
            value={formData.itemDescription}
            onChange={onInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={onInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}


