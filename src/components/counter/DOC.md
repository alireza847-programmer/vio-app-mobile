# VCounter Component

## Overview

The `VCounter` component is a customizable counter input element that allows users to increment or decrement a numerical value. It provides buttons for both increasing and decreasing the count, and the count value can be controlled programmatically.

## How to Use

1. **Import the Component**:

   ```jsx
   import React from 'react';
   import VCounter from 'path/to/VCounter';

   const YourComponent = () => {
     const handleCountChange = newCount => {
       console.log('New Count:', newCount);
       // Your logic with the new count
     };

     return <VCounter onChange={handleCountChange} />;
   };

   export default YourComponent;
   ```

2. **Props**:

   - `initialNumber` (optional, default: 0): The initial value of the counter.
   - `onChange` (required): Callback function that receives the new count value whenever it changes.
   - `sumRule` (optional, default: true): If set to `true`, the increment button is enabled.
   - `minusRule` (optional, default: true): If set to `true`, the decrement button is enabled.

3. **Example**:

   ```jsx
   import React from 'react';
   import VCounter from 'path/to/VCounter';

   const YourComponent = () => {
     const handleCountChange = newCount => {
       console.log('New Count:', newCount);
       // Your logic with the new count
     };

     return <VCounter initialNumber={5} onChange={handleCountChange} />;
   };

   export default YourComponent;
   ```

## Styling

The component provides minimal styling, but you can customize its appearance by styling the individual buttons or adjusting the layout.

## Note

- The `onChange` callback provides the new count value whenever it changes due to user interactions.
- The component uses the `MinusSvg` and `PlusSvg` icons for the decrement and increment buttons, respectively.
- The `sumRule` and `minusRule` props control whether the increment and decrement buttons are enabled, providing flexibility based on your application logic.
