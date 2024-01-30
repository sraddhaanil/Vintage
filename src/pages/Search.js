import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Search() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vintage-backend.onrender.com/api/products/search-item?product=${query}`
        );

        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <p>Name: {result.name}</p>
            <p>Description: {result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

