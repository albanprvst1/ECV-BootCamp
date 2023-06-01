// ./src/hooks/useStarships.ts
import { useQuery } from "@tanstack/react-query";
import React from "react";

async function fetchData() {
  const result = await fetch(`https://swapi.py4e.com/api/starships/`);
  const json = await result.json();
  return json;
}

export function useStarships() {
  return useQuery(["starships"], fetchData);
}