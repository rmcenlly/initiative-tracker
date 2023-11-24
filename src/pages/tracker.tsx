import React from "react";
import { useState, useEffect } from "react";
import playerCharacters from "./players.json";

const defaultCharacters = playerCharacters.campaigns[3].characters;

function Tracker() {
  const [characters, setCharacters] = useState(
    JSON.parse(window.localStorage.getItem("encounterCombatants"))
  );

  useEffect(() => {
    const charactersString = window.localStorage.getItem("encounterCombatants");
    if (charactersString) {
      setCharacters(JSON.parse(charactersString));
    }
  }, [setCharacters]);

  useEffect(() => {
    window.localStorage.setItem(
      "encounterCombatants",
      JSON.stringify(characters)
    );
  }, [characters]);

  const [newCHP, setNewCHP] = useState("0");
  const [newCAC, setNewCAC] = useState("0");

  const [newCharacterName, setNewCharacterName] = useState("NPC");
  const [newHP, setNewHP] = useState("50");
  const [newAC, setNewAC] = useState("14");

  useEffect(() => {
  const newCharacters = [...characters];
  newCharacters.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  setCharacters(newCharacters);
  }, []);

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
                  className={
                    character.HP <= 0
                      ? "bg-red-900 bg-opacity-50 border border-grey-500 md:border-none block md:table-row"
                      : "bg-slate-900 bg-opacity-50 border border-grey-500 md:border-none block md:table-row"
                  }
                >
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    {character.Combatant}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <div className="block inline-flex">
                      {character.HP}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="self-center ml-1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#eb1c45"
                          d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
                        />
                      </svg>
                    </div>
                    <input
                      className="right text-gray-600 text-gray-400 focus:outline-none focus:ring-offset-2 border-gray-700 bg-gray-800 font-normal w-1/2 h-10 items-center pl-3 text-sm  rounded border shadow"
                      type="text"
                      placeholder="Damage"
                      onChange={(e) => {
                        if (e.target.value) setNewCHP(e.target.value);
                      }}
                    />
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <div className="block inline-flex">
                      {character.AC}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="self-center ml-1"
                        version="1.0"
                        width="24"
                        height="24"
                        viewBox="0 0 1024.000000 1280.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <metadata>
                          Created by potrace 1.15, written by Peter Selinger
                          2001-2017
                        </metadata>
                        <g
                          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                          fill="#dba135"
                          stroke="#dba135#c5e0df"
                        >
                          <path d="M5025 12794 c-11 -2 -45 -9 -75 -15 -109 -20 -258 -75 -400 -145 -261 -130 -520 -297 -1167 -756 -982 -697 -1393 -953 -1835 -1141 -399 -171 -907 -284 -1400 -313 -116 -7 -117 -7 -123 -33 -13 -62 -25 -510 -25 -931 0 -733 16 -1148 85 -2260 52 -821 72 -1068 100 -1207 99 -490 449 -1359 803 -1993 306 -549 828 -1290 1270 -1804 623 -724 1493 -1554 2137 -2039 88 -66 175 -126 193 -134 18 -7 68 -16 111 -20 79 -6 956 13 1068 23 l62 5 198 171 c443 380 815 731 1235 1164 772 797 1216 1334 1673 2024 658 992 1047 1921 1139 2715 31 264 95 1243 142 2160 29 569 28 2053 -1 2127 -10 26 -68 38 -183 38 -348 0 -858 116 -1302 297 -192 78 -489 226 -670 334 -221 133 -558 361 -1160 785 -642 453 -864 603 -1029 694 -234 129 -457 219 -609 245 -79 14 -190 18 -237 9z m301 -469 c91 -17 175 -44 294 -93 250 -102 405 -200 1145 -722 1209 -854 1590 -1067 2173 -1215 266 -68 399 -86 684 -92 l257 -6 5 -36 c36 -233 42 -1278 12 -1981 -43 -1012 -115 -2093 -156 -2345 -29 -176 -91 -418 -164 -637 -277 -829 -808 -1711 -1580 -2623 -418 -494 -970 -1055 -1491 -1516 -304 -269 -603 -514 -652 -535 -45 -20 -286 -32 -743 -39 -217 -3 -413 -8 -435 -10 -39 -5 -45 -1 -305 208 -762 609 -1319 1144 -1891 1813 -416 487 -887 1158 -1177 1675 -366 654 -693 1498 -761 1969 -12 83 -53 686 -103 1495 l-32 530 1 890 c1 913 7 1093 36 1123 14 13 54 17 244 23 126 4 280 15 343 24 268 37 587 130 885 257 358 152 627 320 1490 929 793 561 903 633 1155 758 160 79 297 131 410 155 87 19 260 19 356 1z" />
                          <path d="M5034 12120 c-143 -39 -339 -120 -495 -206 -193 -106 -378 -230 -1042 -700 -669 -474 -1002 -691 -1262 -822 -458 -230 -898 -357 -1355 -392 -242 -18 -267 -21 -284 -33 -24 -18 -34 -167 -41 -627 -7 -415 4 -958 30 -1460 45 -878 100 -1708 121 -1841 l7 -39 266 -2 266 -2 -242 -6 c-133 -3 -245 -8 -249 -13 -15 -15 127 -438 258 -767 535 -1348 1658 -2832 3037 -4010 138 -117 473 -388 592 -478 l55 -41 345 -2 c189 -1 417 2 507 6 l162 8 223 185 c1535 1278 2689 2684 3257 3967 114 258 258 690 318 955 30 130 34 168 20 177 -7 4 -71 11 -143 14 l-130 5 147 2 147 2 5 43 c8 52 56 776 96 1437 39 632 59 1673 42 2157 -6 170 -14 318 -17 329 -6 19 -14 21 -93 23 -475 9 -886 102 -1342 303 -415 183 -729 382 -1780 1132 -472 336 -717 489 -952 593 -109 48 -259 103 -282 103 -22 0 -26 -111 -28 -724 l-2 -571 -6 605 c-4 333 -11 629 -15 658 -7 50 -9 52 -39 51 -17 0 -63 -9 -102 -19z" />
                        </g>
                      </svg>
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
                  <td className="md:border md:border-grey-500 text-center">
                    <div className="justify-center">
                      <button
                        className="w-28 border-double border-4 border-sky-500 mx-1 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-sky-500 px-0 py-2 text-xs font-bold focus:outline-none focus:ring-offset-2  focus:ring-sky-500"
                        onClick={() => {
                          const newCharacters = [...characters];
                          newCharacters[index].HP -= parseInt(newCHP, 10) || 0;
                          newCharacters[index].AC += parseInt(newCAC, 10) || 0;
                          setCharacters(newCharacters);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="w-28 border-double border-4 border-rose-500 mx-1 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-rose-500 px-0 py-2 text-xs font-bold focus:outline-none focus:ring-offset-2  focus:ring-rose-500"
                        onClick={() => {
                          const newCharacters = [...characters];
                          newCharacters.splice(index, 1);
                          setCharacters(newCharacters);
                        }}
                      >
                        Remove
                      </button>
                    </div>
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
              <td className="md:border md:border-grey-500 text-left block md:table-cell">
                <div className="flex justify-center">
                  <button
                    className="w-24 border-double border-4 border-emerald-600 mx-2 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-emerald-600 py-2 text-xs focus:outline-none focus:ring-offset-2  focus:ring-emerald-600 font-bold"
                    onClick={() => {
                      const newCharacters = [...characters];
                      newCharacters.push({
                        Combatant: newCharacterName,
                        HP: parseInt(newHP, 10) || 0,
                        AC: parseInt(newAC, 10) || 0,
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
      <div className="flex justify-center mb-5">
        <button
          className="w-36 border-double border-4 border-fuchsia-500 mx-2 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-fuchsia-500 px-0 py-2 focus:outline-none focus:ring-offset-2  focus:ring-fuchsia-500 font-bold"
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
          className="w-36 border-double border-4 border-pink-500 mx-2 my-2 bg-zinc-900 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-pink-500 px-0 py-2 focus:outline-none focus:ring-offset-2  focus:ring-pink-500 font-bold"
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

export default Tracker;
