import React from "react";
import Encounter from "./encounters.json";
import { useState, useEffect } from "react";

function Encounters() {
  const [encounterCombatants, setCombatants] = useState(Encounter.combatants);

  useEffect(() => {
    const encounterCombatantsString = window.localStorage.getItem(
      "encounterCombatants"
    );
    if (encounterCombatantsString) {
      setCombatants(JSON.parse(encounterCombatantsString));
    }
  }, [setCombatants]);

  useEffect(() => {
    window.localStorage.setItem("encounterCombatants", JSON.stringify(encounterCombatants));
  }, [encounterCombatants]);

  // useEffect(() => {
  //   if (!window.localStorage.getItem("encounterCombatants")) {
  //     window.localStorage.setItem("encounterCombatants", JSON.stringify(encounterCombatants));
  //   }
  // }, [encounterCombatants]);

  return (
    <div className="page my-5 mx-10">
      <h1>My Encounters</h1>
      {encounterCombatants.map((character, index) => {
        return (
          <ul className="mb-5 ml-5">
            <li>
              <b>Name: </b>
              {character.Combatant}
              <button
                className="ml-5 font-bold underline text-red-600"
                onClick={() => {
                  const newCharacters = [...encounterCombatants];
                  newCharacters.splice(index, 1);
                  setCombatants(newCharacters);
                }}
              >
                Remove
              </button>
            </li>
            <li>
              <b>Max HP: </b>
              {character.HP}
            </li>
            <li>
              <b>Armor Class: </b>
              {character.AC}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

// Add party to encounter (use a button?)
// Add monsters to encounter (use a button?)
// When ready, "Roll Encounter" which will open the tracker page, and auto roll the initiative for each monster and party member

export default Encounters;
