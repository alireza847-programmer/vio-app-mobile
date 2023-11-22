Certainly! Below is the Markdown documentation for your `HomePage` component:

````markdown
# HomePage Component

## Overview

The `HomePage` component represents the main screen of your application. It provides functionality for users to input search criteria, select check-in and check-out dates, and specify the number of guests and rooms. It also allows users to navigate to the guest page for further customization.

## How to Use

1. **Import the Component**:

   ```jsx
   import HomePage from 'pages/HomePage';
   ```
````

2. **Use the Component**:

   ```jsx
   const YourComponent = () => {
     return <HomePage />;
   };
   ```

## Props

The `HomePage` component does not accept any specific props. It internally uses hooks and context for managing state.

## Structure

The component is structured as follows:

- **MainLayout**: Provides a consistent layout structure for the page, including a header and a wrapper for the main content.

  ```jsx
  import MainLayout from 'layouts/mainLayout';
  ```

- **VText**: Displays the main title of the page.

  ```jsx
  import VText from 'components/uiElements/text';
  ```

- **VInput**: Allows users to input search criteria.

  ```jsx
  import VInput from 'components/uiElements/input';
  ```

- **SelectCheckDate**: Enables users to select check-in and check-out dates.

  ```jsx
  import SelectCheckDate from 'components/selectCheckDate';
  ```

- **RoomInput**: Displays information about the number of guests and rooms, allowing users to navigate to the guest page.

  ```jsx
  import VRow from 'components/uiElements/row';
  import VButton from 'components/uiElements/button';
  ```

## Navigation

- **Guest Page Navigation**: Users can navigate to the guest page by clicking the edit button in the room input section.

  ```jsx
  import {useAppNavigation} from 'hooks/navigation';
  import {GUEST_PAGE} from 'routes/const';

  const navigation = useAppNavigation();
  ```

## Example

```jsx
import React from 'react';
import HomePage from 'pages/HomePage';

const YourComponent = () => {
  return <HomePage />;
};

export default YourComponent;
```
