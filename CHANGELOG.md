# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## <next>
* Added `value` and `name` props to make checkbox act more like a real HTML5 checkbox. Previously
name was generated from `id` prop.

## 1.4.2pm 
* Fixed a styling issue that only occurred in Firefox

## 1.4.1
* Additional props are now passed to the container 

## 1.4.0
* Refactored the component logic. Removed click triggering, etc.

## 1.3.1 
* Prevent default events in event handlers

## 1.3.0
* Checking a checkbox will now trigger a click event on an `input` element. This way we can
pass a "real" synthetic input onChange event to a callback function.

## 1.2.1
* Update packages

## 1.2.0
* Optional onBlur and onFocus callbacks and tabIndex added

## 1.1.4
* Updated oc-cm-common-styles to 2.1.0

## 1.1.3
* Fixed: issue #5 Can't check/uncheck with space bar

## 1.1.2
* Added nowrap white-space
  
## 1.1.1
* Focus style fixed

## 1.1.0
* Added babel-polyfill for DEMO
* Added 2 default props : inputRef and onKeyDown

## 1.0.0
* Initial release
