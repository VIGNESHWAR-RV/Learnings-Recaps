export function createStore(initialState) {
  const previousStateValues = new Map();
  const subScribeList = new Map();
  let currentState = deepFreeze(structuredClone(initialState));
  let timer;

  function deepFreeze(obj) {
    if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach((prop) => deepFreeze(obj[prop]));
    }
    return obj;
  }

  function getStoreValue(pathString) {
    if (pathString === "$store") {
      // keyword to listen to entire store
      return this.currentState;
    }
    pathString = pathString.split(".");
    let value = currentState;
    for (let i = 0; i < pathString.length; i++) {
      if (value.hasOwnProperty(pathString[i])) {
        value = value[pathString[i]];
      } else {
        return undefined;
      }
    }
    return value;
  }

  function subscribe(selector, cb) {
    let callbackSet = subScribeList.get(selector);
    if (callbackSet && !callbackSet.has(cb)) {
      callbackSet.add(cb);
    } else if (!callbackSet) {
      let callbackSet = new Set();
      callbackSet.add(cb);
      subScribeList.set(selector, callbackSet);
    }

    let previousVal = typeof selector === "function" ? selector(currentState) : getStoreValue(selector);
    previousStateValues.set(selector, previousVal);

    return {
      unSubscribe: () => {
        let propertyMap = subScribeList.get(selector);
        propertyMap.delete(cb);
        if (propertyMap.size === 0) {
          subScribeList.delete(selector);
          previousStateValues.delete(selector);
        }
      },
    };
  }

  function triggerListerners() {
    subScribeList.forEach((callbackSet, selector) => {
      let updatedValue = typeof selector === "function" ? selector(currentState) : getStoreValue(selector);
      if (previousStateValues.get(selector) !== updatedValue) {
        previousStateValues.set(selector, updatedValue);
        if (callbackSet) {
          callbackSet.forEach((cb) => cb(updatedValue));
        }
      }
    });
  }

  function publish(cb) {
    currentState = deepFreeze(cb(currentState));
    triggerListerners();
  }

  function debouncedPublish(time, cb) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      publish(cb);
      timer = undefined;
    }, time);
  }

  return { currentState, getStoreValue, subscribe, publish, debouncedPublish };
}

// main motive - ( selective rendering on store update )
