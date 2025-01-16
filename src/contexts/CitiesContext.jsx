/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      async function fetchCities() {
        try {
          const res = await fetch(`${BASE_URL}/cities`);
          const data = await res.json();
          setCities(data);
        } catch (error) {
          console.log(" error: ", error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCities();
    }, 1500);
  }, []);

  async function getCity(id) {
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      console.log(" error: ", error.message);
    } finally {
      setIsLoading(false);
    }
  }
  async function createCity(newCity) {
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
      console.log(data);
    } catch (error) {
      console.log(" error: ", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const myContext = useContext(CitiesContext);
  if (!myContext) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return myContext;
}

export { CitiesProvider, useCities };
