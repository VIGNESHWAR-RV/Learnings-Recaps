import { useEffect, useState } from "react";
import { createAtomStore } from "./atomBasedStore";


export function atomStoreForReact () {
  const {Atom, getAtomState, subscribe} = createAtomStore();

  const useAtom = (atomObj) => {
    let AtomState = getAtomState(atomObj);
    const [state, setState] = useState(AtomState.value);

    useEffect(() => {
      return subscribe(AtomState, setState).unsubscribe;
    }, [AtomState]);

    const stateUpdater = (newState) => {
      if (typeof newState === "function") {
        newState = newState(AtomState.value);
      }
      AtomState.setValue(newState);
    };

    return [state, stateUpdater];
  };

  const useAtomOnlySet = (atomObj) => {
   
    const stateUpdater = (newState) => {
        let AtomState = getAtomState(atomObj);
        if (typeof newState === "function") {
          newState = newState(AtomState.value);
        }
        AtomState.setValue(newState);
    };

    return stateUpdater;
  };

  return {Atom, useAtom, useAtomOnlySet};
}

