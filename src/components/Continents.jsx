import React, { useEffect, useState } from "react";
import { CONTINENTS_URL } from "../config/urls";
import Continent from "./Continent";

function Continents() {
  const [continents, setContinents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(CONTINENTS_URL);
      const data = await response.json();
      setContinents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  }

  if (loading && continents.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-green-500">
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-center gap-8">
          {continents.map((continent) => (
            <Continent key={continent.id} continent={continent} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Continents;
