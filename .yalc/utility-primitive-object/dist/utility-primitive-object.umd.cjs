(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["utility-primitive-object"] = {}));
})(this, function(exports2) {
  "use strict";var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

  function isArray(value) {
    return Array.isArray(value);
  }
  function isEmpty(value) {
    const isCountable = value instanceof Object;
    if (!isCountable) return true;
    return Object.entries(value).length === 0;
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  const isObject = (value) => {
    if (value === null) return false;
    return typeof value === "object";
  };
  function isString(value) {
    return typeof value === "string";
  }
  function isNullOrUndefined(value) {
    if (value === null || value === void 0) return true;
    return false;
  }
  function filterById(array, key, item) {
    if (!isArray(array)) throw new Error("The first argument must be an array");
    if (isEmpty(array)) return array;
    if (!(key in array[0])) {
      throw new Error("The filter key does not exist in the object");
    }
    const keyValue = array[0][key];
    if (!isNullOrUndefined(keyValue) && !isString(keyValue) && !isNumber(keyValue)) {
      throw new Error("The key must be a string or a number");
    }
    if (!isString(item) && !isNumber(item)) {
      throw new Error("The item must be a string or a number");
    }
    return array.filter((element) => element[key] === item);
  }
  const merge = (obj1, obj2) => {
    if (!isObject(obj1) || !isObject(obj2)) {
      return null;
    }
    return __spreadValues(__spreadValues({}, obj1), obj2);
  };
  function orderById(array, key, isAsc = true) {
    if (isEmpty(array)) return array;
    if (!isArray(array)) throw new Error("The first argument must be an array");
    if (!isObject(array[0])) throw new Error("The array must contain objects");
    if (!isString(array[0][key]) && !isNumber(array[0][key])) {
      throw new Error("The key must be a string or a number");
    }
    return array.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (isString(valueA) && isString(valueB)) {
        return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      }
      if (isNumber(valueA) && isNumber(valueB)) {
        console.log(valueA, valueB);
        return isAsc ? valueA - valueB : valueB - valueA;
      }
      throw new Error("The keys do not match the same type");
    });
  }
  const prettyPrint = (value) => {
    if (!isObject(value)) return null;
    return JSON.stringify(value, null, 2);
  };
  exports2.filterById = filterById;
  exports2.isArray = isArray;
  exports2.isEmpty = isEmpty;
  exports2.isNumber = isNumber;
  exports2.isObject = isObject;
  exports2.isString = isString;
  exports2.merge = merge;
  exports2.orderById = orderById;
  exports2.prettyPrint = prettyPrint;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=utility-primitive-object.umd.cjs.map
