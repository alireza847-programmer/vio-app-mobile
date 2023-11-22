# MainLayout Component

## Overview

The `MainLayout` component is a flexible layout structure designed to provide a consistent and customizable layout for various sections of your application. It includes options for a header, title, close button, and a customizable right icon.

## How to Use

1. **Import the Component**:

   ```jsx
   import MainLayout from 'path/to/MainLayout';
   ```

2. **Use the Component**:

   ```jsx
   const YourComponent = () => {
     return (
       <MainLayout
         withHeader={true} // Set to false to hide the header
         title="Your Title" // Set the title for the header
         withClose={true} // Set to false to hide the close button
         rightIcon={<YourIcon />} // JSX for the right icon
         withLogo={false} // Set to true to display a logo instead of text title
       >
         {/* Your content goes here */}
       </MainLayout>
     );
   };
   ```

## Props

- `children` (ReactNode): The content to be rendered within the layout.

- `title` (string, optional): The title to be displayed in the header. If `withLogo` is set to true, the title can also be a custom logo.

- `withClose` (boolean, optional): If true, a close button will be displayed in the header for closing the layout.

- `rightIcon` (ReactNode, optional): JSX for a customizable icon to be displayed on the right side of the header.

- `withHeader` (boolean, optional): If true, a header will be rendered at the top of the layout.

- `withLogo` (boolean, optional): If true, the title will be treated as a logo, and the default text styling will be overridden.

- `onClosePress` (function, optional): callBack function of close button

## Example

```jsx
import React from 'react';
import MainLayout from 'path/to/MainLayout';

const YourComponent = () => {
  return (
    <MainLayout
      withHeader={true}
      title="Your Title"
      withClose={true}
      rightIcon={<YourIcon />}
      withLogo={false}>
      {/* Your content goes here */}
    </MainLayout>
  );
};

export default YourComponent;
```

## Notes

- The `MainLayout` component provides a consistent structure for your application's sections, making it easy to manage and customize headers and content.
