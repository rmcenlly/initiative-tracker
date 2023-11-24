import React from "react";
import { useState, useEffect } from "react";
import Campaigns from "./players.json";

function Players() {
  const [collapsed, setCollapsed] = useState({});
  const toggle = (id: number) => {
    const newCollapsed = { ...collapsed };
    newCollapsed[id] = !collapsed[id];
    setCollapsed(newCollapsed);
  };

  const [campaign] = useState(Campaigns);

  useEffect(() => {
    window.localStorage.setItem("campaigns", JSON.stringify(campaign));
  }, [campaign]);

  const [combatants, setCombatants] = useState(
    JSON.parse(window.localStorage.getItem("encounterCombatants"))
  );

  useEffect(() => {
    const combatantsString = window.localStorage.getItem(
      "encounterCombatants"
    );
    if (combatantsString) {
      setCombatants(JSON.parse(combatantsString));
    }
  }, [setCombatants]);

  useEffect(() => {
    window.localStorage.setItem(
      "encounterCombatants",
      JSON.stringify(combatants)
    );
  }, [combatants]);

  return (
    <div className="page my-5 mx-10">
      <h1 className="mb-5">My Campaigns</h1>
      <div>
        {campaign.campaigns.map((details) => {
          const encounter = () => {
            let newEncounterCombatant;
            if (combatants) {
              newEncounterCombatant = [...combatants];
            } else {
              newEncounterCombatant = [];
            }
            for (var i = 0; i < details.characters.length; i++) {
              newEncounterCombatant.push({
                Combatant: details.characters[i].characterName,
                HP: details.characters[i].HP,
                AC: details.characters[i].AC,
              });
            }
            setCombatants(newEncounterCombatant);
          };
          return (
            <div key={details.id}>
              <button className="font-bold" onClick={() => toggle(details.id)}>
                {collapsed[details.id] === true
                  ? details.name + " \u25B2"
                  : details.name + " \u25BC"}
              </button>
              <button
                className="ml-5 font-bold underline text-green-600"
                onClick={() => {
                  encounter();
                }}
              >
                Add
              </button>
              {details.characters.map((character) => {
                return (
                  <ul
                    className={
                      collapsed[details.id] ? "mb-5 ml-5" : "mb-5 ml-5 hidden"
                    }
                  >
                    <li>
                      <b>Name: </b>
                      {character.characterName}
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
        })}
      </div>
    </div>
  );
}

export default Players;
