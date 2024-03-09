export class CreateStore {
  previousStateValues = {};
  subScribeList = new Map();

  constructor(initialState) {
    if (initialState && typeof initialState === "object") {
      this.currentState = this.deepFreeze(structuredClone(initialState));
    } else {
      this.currentState = {};
    }
  }

  deepFreeze = (obj) => {
    if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach((prop) =>
        this.deepFreeze(obj[prop])
      );
    }
    return obj;
  };

  getStoreValue = (pathString) => {
    if (pathString === "$store") { // keyword to use in order to listen to entire store
      return this.currentState;
    }
    pathString = pathString.split(".");
    let value = this.currentState;
    for (let i = 0; i < pathString.length; i++) {
      if (value.hasOwnProperty(pathString[i])) {
        value = value[pathString[i]];
      } else {
        return undefined;
      }
    }
    return value;
  };

  subscribe = (property, func) => {
    let listeners = this.subScribeList.get(property);
    if (listeners && !listeners.get(func)) {
      listeners.set(func, func);
    } else if (!listeners) {
      let map = new Map();
      map.set(func, func);
      this.subScribeList.set(property, map);
    }

    let propetyCurrentValue = this.getStoreValue(property);
    this.previousStateValues[property] = propetyCurrentValue;

    return {
      value: propetyCurrentValue,
      unSubscribe: () => {
        let propertyMap = this.subScribeList.get(property);
        propertyMap.delete(func);
        if (propertyMap.size === 0) {
          this.subScribeList.delete(property);
          delete this.previousStateValues[property];
        }
      },
    };
  };

  triggerListerners = (list) => {
    list.forEach((property) => {
      let updatedValue = this.getStoreValue(property);
      if (this.previousStateValues[property] !== updatedValue) {
        this.previousStateValues[property] = updatedValue;
        const listenerMap = this.subScribeList.get(property);
        if (listenerMap) {
          listenerMap.forEach((func) => func(updatedValue));
        }
      }
    });
  };

  publish = (cb) => {
    queueMicrotask(() => {
      this.currentState = this.deepFreeze(cb(this.currentState));
      this.triggerListerners(this.subScribeList.keys());
    });
  };

  debouncedPublish = (timer, cb) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.publish(cb);
      this.timer = undefined;
    }, timer);
  };
}


// main responsibilities of state management library

// provide a global store ( should be immutable )
// provide a way to listen to states in store
// trigger listeners on state change (advanced:- triggering respective listeners when respective property changed )
// provide a way to unsubscribe so unnecessary listeners are garbage collected.
// provide a way to update the state in the store ( in a immutable way )


// approach adopted

// property for value of state that need to be listened is passed as string for subscribe ("user.data") => {user: {data: "something"}} 
// while subscribing, value for that property string is assigned in previousStateValues object. 
// on state update,
//  every property string that are checked if they are changed
//     if changed, respective registered listeners for that properties are triggered which will update the local values in the component they are used.
