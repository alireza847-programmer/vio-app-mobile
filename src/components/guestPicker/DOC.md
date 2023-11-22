Certainly! Here's the Markdown documentation for your `GuestPicker` and `Room` components:

### GuestPicker Component

#### Overview

The `GuestPicker` component allows users to select the number of guests and rooms for their stay. It dynamically updates as users add or remove rooms and adjust the number of adults and children for each room.

#### How to Use

1. **Import the Component**:

   ```jsx
   import GuestPicker from 'path/to/GuestPicker';
   ```

2. **Use the Component**:

   ```jsx
   const YourComponent = () => {
     const initialData = []; // Provide initial data as an array of ParsedLinkItem.
     return <GuestPicker initialData={initialData} />;
   };
   ```

#### Props

The `GuestPicker` component accepts the following props:

- **initialData**: An array of `ParsedLinkItem` representing the initial configuration of rooms and guests.

#### Structure

- **Container**: The main container for the `GuestPicker` component.

- **FlatListContainer**: A container for rendering the list of rooms using a `FlatList`. It dynamically updates as rooms are added or removed.

- **ButtonsWrapper**: Contains the "Search" button, allowing users to perform a search based on their selected criteria.

#### Functions

- **onNewRoom**: Adds a new room to the list of rooms.

#### Example

```jsx
import React from 'react';
import GuestPicker from 'path/to/GuestPicker';

const YourComponent = () => {
  const initialData = [];
  return <GuestPicker initialData={initialData} />;
};

export default YourComponent;
```

### Room Component

#### Overview

The `Room` component represents an individual room within the `GuestPicker`. It allows users to specify the number of adults and children for each room.

#### How to Use

The `Room` component is used internally by the `GuestPicker` component and is not meant to be used independently.

#### Props

The `Room` component receives the following props:

- **index**: The index of the room in the list.
- **item**: A `ParsedLinkItem` representing the configuration of the room.

#### Structure

- **Container**: The main container for the `Room` component.

- **ChildContainer**: Contains the information related to children, including their ages.

#### Functions

The `Room` component uses several functions from the `useRoomsStore` store to manage the state of rooms.

#### Example

The `Room` component is used internally by the `GuestPicker` component and doesn't have a standalone usage example.

Feel free to modify and expand upon this documentation based on any additional details or considerations specific to your project.
