import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const defaultCharacters = [
  {
    characterName: "Elia",
    HP: 38,
    AC: 15,
  },
  {
    characterName: "Axel",
    HP: 44,
    AC: 14,
  },
  {
    characterName: "The Wanderer",
    HP: 43,
    AC: 13,
  },
  {
    characterName: "Jesus Joseph  ",
    HP: 38,
    AC: 16,
  },
];

function App() {

  const [characters, setCharacters] = useState(defaultCharacters);
  const [newCHP, setNewCHP] = useState("0");
  const [newCAC, setNewCAC] = useState("0");

  const [newCharacterName, setNewCharacterName] = useState("NPC");
  const [newHP, setNewHP] = useState("50");
  const [newAC, setNewAC] = useState("14");

  useEffect(() => {
    const charactersString = window.localStorage.getItem("characters");
    if (charactersString) {
      setCharacters(JSON.parse(charactersString));
    }
  }, [setCharacters]);

  useEffect(() => {
    window.localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  return (
    <div className="mx-5">
      <br />
      <h1>Combat Tracker</h1>
      <br />
      <div className="flex justify-center">
        <table className="md:max-w-3xl border-collapse block md:table flex justify-centered mb-5">
          <thead className="block md:table-header-group text-center">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-zinc-900 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">
                Character
              </th>
              <th className="bg-zinc-900 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">
                Hit Points
              </th>
              <th className="bg-zinc-900 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">
                Armor Class
              </th>
              <th className="bg-zinc-900 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell"></th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group text-2xl">
            {characters.map((character, index) => {
              return (
                <tr
                  key={index}
                  className="bg-slate-900 bg-opacity-50 border border-grey-500 md:border-none block md:table-row"
                >
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    {character.characterName}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <div className="block inline-flex">
                      {character.HP}
                      <img className="ml-2 h-min self-center" src="https://img.icons8.com/fluency-systems-filled/25/fa314a/pixel-heart.png" />
                    </div>
                    <input
                      className="right text-gray-600 text-gray-400 focus:outline-none focus:ring-offset-2 border-gray-700 bg-gray-800 font-normal w-1/2 h-10 items-center pl-3 text-sm  rounded border shadow"
                      type="text"
                      placeholder="Damage"
                      onChange={(e) => {
                        setNewCHP(e.target.value);
                      }}
                    />
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <div className="block inline-flex">
                      {character.AC}
                      <img className="ml-2 h-min self-center" src="https://img.icons8.com/color/25/000000/knight-shield.png" />
                    </div>
                    <input
                      className="right text-gray-600 text-gray-400 focus:outline-none focus:ring-offset-2 border-gray-700 bg-gray-800 font-normal w-1/2 h-10 items-center pl-3 text-sm  rounded border shadow"
                      type="text"
                      placeholder="0"
                      onChange={(e) => {
                        setNewCAC(e.target.value);
                      }}
                    />
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell flex justify-center">
                    <button
                      className="border-double border-4 border-blue-700 mx-2 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-blue-700 px-6 py-2 text-xs focus:outline-none focus:ring-offset-2  focus:ring-green-700 font-bold"
                      onClick={() => {
                        const newCharacters = [...characters];
                        newCharacters[index].HP -= parseInt(newCHP, 10)
                        newCharacters[index].AC += parseInt(newCAC, 10);
                        setCharacters(newCharacters);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="flex justify-end border-double border-4 border-rose-600 mx-2 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-rose-600 px-6 py-2 text-xs font-bold focus:outline-none focus:ring-offset-2  focus:ring-rose-800"
                      onClick={() => {
                        const newCharacters = [...characters];
                        newCharacters.splice(index, 1);
                        setCharacters(newCharacters);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="bg-slate-900 bg-opacity-50 border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <input
                  className="text-gray-600 text-gray-400 focus:outline-none focus:ring-offset-2 border-gray-700 bg-gray-800 font-normal w-min h-10 flex items-center pl-3 text-sm  rounded border shadow"
                  type="text"
                  value={newCharacterName}
                  onChange={(e) => {
                    setNewCharacterName(e.target.value);
                  }}
                />
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <input
                  className="text-gray-600 text-gray-400 focus:outline-none focus:ring-offset-2 border-gray-700 bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm  rounded border shadow"
                  type="text"
                  value={newHP}
                  onChange={(e) => {
                    setNewHP(e.target.value);
                  }}
                />
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <input
                  className="middle text-gray-600 text-gray-400 focus:outline-none focus:ring-offset-2 border-gray-700 bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm  rounded border shadow"
                  type="text"
                  value={newAC}
                  onChange={(e) => {
                    setNewAC(e.target.value);
                  }}
                />
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <div className="flex justify-center">
                  <button
                    className="border-double border-4 border-green-700 mx-2 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-green-700 px-6 py-2 text-xs focus:outline-none focus:ring-offset-2  focus:ring-green-700 font-bold"
                    onClick={() => {
                      const newCharacters = [...characters];
                      newCharacters.push({
                        characterName: newCharacterName,
                        HP: parseInt(newHP, 10),
                        AC: parseInt(newAC, 10),
                      });
                      setCharacters(newCharacters);
                    }}
                  >
                    Add
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button
          className="border-double border-4 border-violet-800 mx-2 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-violet-800 px-6 py-2 text-lg focus:outline-none focus:ring-offset-2  focus:ring-violet-800 font-bold"
          onClick={() => {
            const newCharacters = [...characters];
            newCharacters.sort(function (a, b) {
              return 0.5 - Math.random();
            });
            setCharacters(newCharacters);
          }}
        >
          Randomize
        </button>
        <button
          className="border-double border-4 border-amber-600 mx-2 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-amber-600 px-6 py-2 text-lg focus:outline-none focus:ring-offset-2  focus:ring-amber-600 font-bold"
          onClick={() => {
            setCharacters(defaultCharacters);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
