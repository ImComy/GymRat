import React, { useState } from "react";

interface NestedItem {
  name: string;
  type: string;
}

interface SavedItemProps {
  name: string;
  type: string;
  date: string;
  nestedItems?: NestedItem[];
  onEdit: (newName: string, newType: string, newNestedItems: NestedItem[]) => void;
  onDelete: () => void;
}

const SavedItem: React.FC<SavedItemProps> = ({
  name,
  type,
  date,
  nestedItems = [],
  onEdit,
  onDelete,
}) => {
  const defaultNestedItems: NestedItem[] = [
    { name: "Sample Workout 1", type: "Workout" },
    { name: "Sample Meal 1", type: "Meal" },
    { name: "Sample Workout 2", type: "Workout" },
    { name: "Sample Workout 3", type: "Workout" },
    { name: "Sample Meal 3", type: "Meal" },
    { name: "Sample Workout 4", type: "Workout" },
    { name: "Sample Meal 4", type: "Meal" },
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newType, setNewType] = useState(type);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [newNestedItems, setNewNestedItems] = useState(nestedItems.length > 0 ? nestedItems : defaultNestedItems);

  const [viewLimit, setViewLimit] = useState(3);
  const rowsToShow = 3;

  const handleSave = () => {
    onEdit(newName, newType, newNestedItems);
    closeModal();
  };

  const closeModal = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsEditing(false);
      setIsFadingOut(false);
    }, 300);
  };

  const handleNestedDelete = (index: number) => {
    const updatedNestedItems = newNestedItems.filter((_, i) => i !== index);
    setNewNestedItems(updatedNestedItems);
  };

  const loadMoreItems = () => {
    setViewLimit(viewLimit + rowsToShow);
  };

  return (
    <div className="relative bg-gradient-to-br from-green-50 to-white w-[280px] h-auto rounded-xl shadow-md p-4 flex flex-col justify-between items-center border border-gray-200 hover:shadow-xl">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700 truncate">{newName}</h3>
        <p className="text-sm text-gray-500">{newType}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>

      <div className="mt-4 w-full">
        <h4 className="text-sm font-bold text-gray-600 mb-2">Details:</h4>
        <ul className="space-y-2">
          {newNestedItems.slice(0, viewLimit).map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm">
              <span className="text-sm text-gray-700">{item.name} ({item.type})</span>
              <button
                className="text-xs text-red-500 underline hover:text-red-700"
                onClick={() => handleNestedDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {viewLimit < newNestedItems.length && (
          <div className="text-center mt-2">
            <button
              className="text-sm text-blue-500 underline hover:text-blue-700"
              onClick={loadMoreItems}
            >
              View More
            </button>
          </div>
        )}
      </div>

      <div className="flex space-x-2 mt-3">
        <button
          className="px-4 py-1 text-xs font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SavedItem;
