import { useEffect, useState } from "react";
import { createStore } from "./ownStore";


export function ownStoreForReact (initialState) {
  const {currentState, getStoreValue, subscribe, publish, debouncedPublish} = createStore(initialState);

  function useStoreValue(propertySelector) {
     const [storeValue, setState] = useState(()=> typeof propertySelector === "function" ? propertySelector(currentState) : getStoreValue(propertySelector));

     useEffect(()=>{
      const listener = subscribe(propertySelector, setState);

      return listener.unSubscribe;
     }, [propertySelector]);

     return storeValue;
  };

  return {useStoreValue, publish, debouncedPublish};
}

