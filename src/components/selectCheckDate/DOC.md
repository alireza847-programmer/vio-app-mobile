# SelectCheckDate Component

## Overview

The `SelectCheckDate` component is designed to enable users to conveniently choose check-in and check-out dates. It leverages a `DatePicker` component and returns an object with the selected date range.

## How to Use

2. **Use the Component**:

   ```jsx
   const YourComponent = () => {
     const handleDateSelect = selectedRange => {
       console.log('Selected Date Range:', selectedRange);
       // Your logic with the selected date range
     };

     return <SelectCheckDate onSelect={handleDateSelect} />;
   };
   ```

3. **Props**:

   - `onSelect` (required): Callback function that receives the selected date range as an object with `startDate` and `endDate` properties.

4. **Example**:

   ```jsx
   import React from 'react';
   import SelectCheckDate from 'path/to/SelectCheckDate';

   const YourComponent = () => {
     const handleDateSelect = selectedRange => {
       console.log('Selected Date Range:', selectedRange);
       // Your logic with the selected date range
     };

     return <SelectCheckDate onSelect={handleDateSelect} />;
   };

   export default YourComponent;
   ```

## Note

- The `onSelect` callback provides the selected date range in the following format:

  ```javascript
  {
    startDate: 'yyyy-mm-dd',
    endDate: 'yyyy-mm-dd',
  }
  ```

- The `SelectCheckDate` component internally uses a `DatePicker` component to facilitate date selection.

By integrating the `SelectCheckDate` component into your application, you empower users to effortlessly choose check-in and check-out dates, enhancing the user experience in date selection.
