import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const defaultPlayers = ["Riley", "Josh", "Jackson"];

function App() {
  const [players, setPlayers] = useState(defaultPlayers);
  const [newPlayerName, setNewPlayerName] = useState("Monster");

  return (
    <div className="font-sans antialiased bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container h-full w-full md:max-w-3xl mx-auto">
        <h1>Players</h1>
        <div className="mx-auto px-4 py-4 max-w-xl my-auto">
          <ul className=" list-reset flex flex-col">
            {players.map((player, index) => (
              <li className="relative -mb-px block border p-4 border-grey">
                <button
                  className="mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700"
                  onClick={() => {
                    const newPlayers = [...players];
                    newPlayers.splice(index, 1);
                    setPlayers(newPlayers);
                  }}
                >
                  Delete
                </button>
                {player}
              </li>
            ))}
          </ul>
          <button
            className="mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700"
            onClick={() => {
              const newPlayers = [...players];
              newPlayers.sort(function (a, b) {
                return 0.5 - Math.random();
              });
              setPlayers(newPlayers);
            }}
          >
            Randomize
          </button>
          <br />
          <input
            className="dark:text-black"
            type="text"
            placeholder="new player name"
            value={newPlayerName}
            onChange={(e) => {
              setNewPlayerName(e.target.value);
            }}
          />
          <button
            className="mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700"
            onClick={() => {
              const newPlayers = [...players];
              newPlayers.push(newPlayerName);
              setPlayers(newPlayers);
            }}
          >
            Add
          </button>
          <br />
          <button
            className="mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700"
            onClick={() => {
              setPlayers(defaultPlayers);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
