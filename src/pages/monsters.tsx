import React from "react";
import { useState, useEffect } from "react";
import Monster from "./monsters.json";

let toggledTable = "min-w-full";

function compare(a, b) {
  if (a.Name < b.Name) {
    return -1;
  }
  if (a.Name > b.Name) {
    return 1;
  }
  return 0;
}

Monster.sort(compare);

function Monsters() {
  function CatTable(category) {
    const [cat, setCat] = useState(true);
    const toggle = () => {
      setCat(!cat);
    };
    const [encounterMonsters, setMonsters] = useState(JSON.parse(window.localStorage.getItem("encounterCombatants")));

    useEffect(() => {
      const encounterMonstersString = window.localStorage.getItem("encounterCombatants");
      if (encounterMonstersString) {
        setMonsters(JSON.parse(encounterMonstersString));
      }
    }, [setMonsters]);

    useEffect(() => {
      window.localStorage.setItem("encounterCombatants", JSON.stringify(encounterMonsters));
    }, [encounterMonsters]);

    return (
      <div>
        <button className="toggler" onClick={toggle}>
          {cat === true ? category + " \u25BC" : category + " \u25B2"}
        </button>
        <table className={cat ? "min-w-full hidden" : null}>
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm text-white font-bold px-6 py-4 text-left"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-sm text-white font-bold px-6 py-4 text-left"
              >
                HP
              </th>
              <th
                scope="col"
                className="text-sm text-white font-bold px-6 py-4 text-left"
              >
                AC
              </th>
              <th
                scope="col"
                className="text-sm text-white font-bold px-6 py-4 text-left"
              >
                Challenge
              </th>
              <th
                scope="col"
                className="text-sm text-white font-bold px-6 py-4 text-left"
              >
                XP
              </th>
              <th
                scope="col"
                className="text-sm text-white font-bold px-6 py-4 text-left"
              >
                Add to Encounter
              </th>
            </tr>
          </thead>
          <tbody>
            {Monster.map((stats, index) => {
              let xp = "0";
              if (Monster[index].Challenge == "0") {
                xp = "10";
              } else if (Monster[index].Challenge == "1/8") {
                xp = "25";
              } else if (Monster[index].Challenge == "1/4") {
                xp = "50";
              } else if (Monster[index].Challenge == "1/2") {
                xp = "100";
              } else if (Monster[index].Challenge == "1") {
                xp = "200";
              } else if (Monster[index].Challenge == "2") {
                xp = "450";
              } else if (Monster[index].Challenge == "3") {
                xp = "700";
              } else if (Monster[index].Challenge == "4") {
                xp = "1,100";
              } else if (Monster[index].Challenge == "5") {
                xp = "1,800";
              } else if (Monster[index].Challenge == "6") {
                xp = "2,300";
              } else if (Monster[index].Challenge == "7") {
                xp = "2,900";
              } else if (Monster[index].Challenge == "8") {
                xp = "3,900";
              } else if (Monster[index].Challenge == "9") {
                xp = "5,000";
              } else if (Monster[index].Challenge == "10") {
                xp = "5,900";
              } else if (Monster[index].Challenge == "11") {
                xp = "7,200";
              } else if (Monster[index].Challenge == "12") {
                xp = "8,400";
              } else if (Monster[index].Challenge == "13") {
                xp = "10,000";
              } else if (Monster[index].Challenge == "14") {
                xp = "11,500";
              } else if (Monster[index].Challenge == "15") {
                xp = "13,000";
              } else if (Monster[index].Challenge == "16") {
                xp = "15,000";
              } else if (Monster[index].Challenge == "17") {
                xp = "18,000";
              } else if (Monster[index].Challenge == "18") {
                xp = "20,000";
              } else if (Monster[index].Challenge == "19") {
                xp = "22,000";
              } else if (Monster[index].Challenge == "20") {
                xp = "25,000";
              } else if (Monster[index].Challenge == "21") {
                xp = "33,000";
              } else if (Monster[index].Challenge == "22") {
                xp = "41,000";
              } else if (Monster[index].Challenge == "23") {
                xp = "50,000";
              } else if (Monster[index].Challenge == "24") {
                xp = "62,000";
              } else if (Monster[index].Challenge == "25") {
                xp = "75,000";
              } else if (Monster[index].Challenge == "26") {
                xp = "90,000";
              } else if (Monster[index].Challenge == "27") {
                xp = "105,000";
              } else if (Monster[index].Challenge == "28") {
                xp = "120,000";
              } else if (Monster[index].Challenge == "29") {
                xp = "135,000";
              } else if (Monster[index].Challenge == "30") {
                xp = "155,000";
              }

              const encounter = () => {
                let newEncounterMonster;
                if (encounterMonsters) {
                  newEncounterMonster = [...encounterMonsters];
                }
                else {
                  newEncounterMonster = [];
                }
                newEncounterMonster.push({
                  Combatant: Monster[index].Name,
                  HP: Monster[index].HP,
                  AC: Monster[index].AC,
                });

                setMonsters(newEncounterMonster);
              };

              if (
                Monster[index].Type.toLowerCase() === category.toLowerCase()
              ) {
                {
                  return (
                    <tr>
                      <td className="text-sm dark:text-white font-medium px-6 py-4 whitespace-nowrap">
                        {Monster[index].Name}
                      </td>
                      <td className="text-sm dark:text-white font-light px-6 py-4 whitespace-nowrap">
                        {Monster[index].HP}
                      </td>
                      <td className="text-sm dark:text-white font-light px-6 py-4 whitespace-nowrap">
                        {Monster[index].AC}
                      </td>
                      <td className="text-sm dark:text-white font-light px-6 py-4 whitespace-nowrap">
                        {Monster[index].Challenge}
                      </td>
                      <td className="text-sm dark:text-white font-light px-6 py-4 whitespace-nowrap">
                        {xp + " XP"}
                      </td>
                      <td className="text-sm dark:text-white font-light px-6 py-4 whitespace-nowrap">
                        <button className="toggler" onClick={encounter}>
                          Add
                        </button>
                      </td>
                    </tr>
                  );
                }
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="page my-5 mx-10">
      <h1>Monsters</h1>
      <p>
        Below is a list of monsters from the monster manual. Each is sorted into
        their monster typing.
      </p>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {CatTable("Aberration")}
              {CatTable("Celestial")}
              {CatTable("Construct")}
              {CatTable("Demon")}
              {CatTable("Devil")}
              {CatTable("Dinosaur")}
              {CatTable("Dragon")}
              {CatTable("Elemental")}
              {CatTable("Fey")}
              {CatTable("Fiend")}
              {CatTable("Giant")}
              {CatTable("Humanoid")}
              {CatTable("Monstrosity")}
              {CatTable("Plant")}
              {/* TODO: Make search function */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Monsters;
