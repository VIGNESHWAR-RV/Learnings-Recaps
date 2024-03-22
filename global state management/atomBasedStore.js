
export function createAtomStore() {
    
  function subscribe(atomState, cb) {
    atomState.subscribeList.add(cb);
    return { unsubscribe : () => atomState.subscribeList.delete(cb) };
  }

  function deepFreeze(obj) {
    if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach((prop) => deepFreeze(obj[prop]));
    }
    return obj;
  }

  let atomMap = new WeakMap();

  function getAtomState(atom) {
    if (!atomMap.get(atom)) {
      const atomState = {
        value: atom.init,
        subscribeList: new Set(),
        setValue(newVal) {
          this.value = deepFreeze(newVal);
          this.subscribeList.forEach((listener) => listener(newVal));
        },
        reset() {
          this.value = atom.init;
        },
      };
      atomMap.set(atom, atomState);
      return atomState;
    } else {
      return atomMap.get(atom);
    }
  }

  return {
    Atom(initialState) {
      return {
        init: deepFreeze(structuredClone(initialState)),
      };
    },
    subscribe,
    getAtomState
  };
};
