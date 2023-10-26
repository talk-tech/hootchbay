import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Collections from "./components/Collections";
import DeveloperPanel from "./components/DeveloperPanel";
import About from "./components/About";
import { v4 as uuid } from "uuid";

function App() {
  // Initialize collections state using local storage or an empty array
  const [collections, setCollections] = useState(() => {
    const storedCollections = JSON.parse(localStorage.getItem("collections"));
    return storedCollections || [];
  });

  // Function to add an item to collections
  function AddToCollection(item) {
    const id = uuid();
    const updatedCollections = [...collections, { id, ...item }];
    setCollections(updatedCollections);

    // Save the updated collections to local storage
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  }

  // Function to delete an item from collections
  function DeleteItem(id) {
    const updatedCollections = collections.filter((item) => item.id !== id);
    setCollections(updatedCollections);

    // Save the updated collections to local storage
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  }

  useEffect(() => {
    // Load collections from local storage when the component mounts
    const storedCollections = JSON.parse(localStorage.getItem("collections"));
    if (storedCollections) {
      setCollections(storedCollections);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home AddToCollection={AddToCollection} />} />
        <Route
          path="/search"
          element={<SearchPage AddToCollection={AddToCollection} />}
        />
        <Route
          path="/collections"
          element={<Collections collections={collections} DeleteItem={DeleteItem} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/developerpanel" element={<DeveloperPanel />} />
      </Routes>
    </div>
  );
}

export default App;
