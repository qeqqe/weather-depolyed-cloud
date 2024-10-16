import React from "react";

export default function Input({ query, setQuery }) {
  return (
    <>
      <div className=""></div>
      <input
        className="w-[30vw] p-2 outline-none rounded-md "
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a location"
      />
    </>
  );
}
