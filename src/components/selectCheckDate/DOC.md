````markdown
# SelectCheckDate Component Documentation

## Overview

The `SelectCheckDate` component facilitates the selection of check-in and check-out dates, providing a seamless experience for users. It incorporates a `DatePicker` component and delivers a callback function with the chosen date range.

## How to Use

1. **Usage in Your Component**:

   ```jsx
   import React from 'react';
   import SelectCheckDate from 'your-package-name';

   const YourComponent = () => {
     const handleDateSelect = selectedRange => {
       console.log('Selected Date Range:', selectedRange);
       // Your logic with the selected date range
     };

     return <SelectCheckDate onConfirm={handleDateSelect} />;
   };

   export default YourComponent;
   ```
````

3. **Props**:

   - `onConfirm` (required): Callback function that receives the selected date range as an object with `startDate` and `endDate` properties.

4. **Example Output**:

   ```javascript
   // Selected Date Range Format
   {
     startDate: 'yyyy-mm-dd',
     endDate: 'yyyy-mm-dd',
   }
   ```

## Note

- The `onConfirm` callback provides the selected date range in the specified format.
- Internally, the `SelectCheckDate` component utilizes a `DatePicker` component for streamlined date selection.

By integrating the `SelectCheckDate` component into your application, users can effortlessly choose check-in and check-out dates, enhancing the overall user experience.

```

```
