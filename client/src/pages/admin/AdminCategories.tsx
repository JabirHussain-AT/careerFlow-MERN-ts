import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCategories } from '@/redux/actions/adminActions'; 

const AdminCategories: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const dispatch = useDispatch()
  const [newCategory, setNewCategory] = useState('');

  // Mock API call to fetch categories
  const fetchCategories = () => {
    // Assuming fetchData is an async function that fetches categories from an API
    // const data = await fetchData();
    // setCategories(data);
    const mockData = ['Category 1', 'Category 2', 'Category 3'];
    setCategories(mockData);
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (newCategory.trim() !== '') {
      try {
        const result = await dispatch(addCategories({ category: newCategory })).unwrap();
  
        // Handle successful response if needed
        console.log('Category added successfully:', result);
        setCategories([...categories, newCategory]);
        setNewCategory('');
      } catch (error) {
        // Handle error if needed
        console.error('Error adding category:', error);
      }
    }
  };
  


  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Displaying Categories */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul className="list-disc pl-4">
            {categories.map((category, index) => (
              <li key={index} className="mb-2">{category}</li>
            ))}
          </ul>
        </div>

        {/* Add Category Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Add Category</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="New Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full px-2 py-1 border rounded mr-2"
            />
            <button
              onClick={handleAddCategory}
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;