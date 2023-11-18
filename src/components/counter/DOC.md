# VCounter Component Documentation

The `VCounter` component is a simple counter component implemented in React Native. It allows users to increase or decrease a numeric value with the help of plus and minus buttons.

## Usage

```jsx
import VCounter from 'components/uiElements/counter';

const YourComponent = () => {
  const handleCounterChange = value => {
    // Handle the counter value change
    console.log('Counter Value:', value);
    // Additional logic or state management can be added here
  };

  return (
    <VCounter
      initialNumber={0} // Optional: Initial value for the counter (default is 0)
      onChange={handleCounterChange} // Callback function on counter value change
    />
  );
};

export default YourComponent;
```

## Props

### `initialNumber` (number)

An optional prop that sets the initial value for the counter. The default value is `0`.

### `onChange` (function)

A callback function that is triggered when the counter value changes. It receives the updated value as an argument.

## Example

```jsx
import VCounter from 'components/uiElements/counter';

const YourComponent = () => {
  const handleCounterChange = value => {
    // Handle the counter value change
    console.log('Counter Value:', value);
    // Additional logic or state management can be added here
  };

  return (
    <VCounter
      initialNumber={5} // Set the initial value to 5
      onChange={handleCounterChange} // Handle counter value change
    />
  );
};

export default YourComponent;
```
