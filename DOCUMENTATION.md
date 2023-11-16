# Project Documentation

### Why Storybook?

Storybook was chosen as the UI development environment for several reasons:

1. **Isolated Component Development**: Storybook allows for the development and testing of components in isolation. This is crucial for ensuring each component works independently before being integrated into the larger application.

2. **Visual Testing and QA**: With Storybook, it's easy to visually test components and ensure they meet design specifications. QA processes become more streamlined, reducing the chance of UI-related bugs.

3. **Documentation and Usage Showcase**: Storybook serves as an excellent living documentation for components. It provides a showcase of components in different states, making it easier for developers to understand how to use them.

4. **Collaboration and Design Discussions**: Storybook promotes collaboration between designers and developers. Designers can view and interact with components in different states without having to run the entire application, facilitating more effective design discussions.

5. **Enhanced Development Speed**: By providing a dedicated environment for UI development, Storybook accelerates the development process. Developers can work on components without the need to navigate through the entire application, leading to faster iteration and debugging.

6. **Open Source Community Support**: Storybook has a vibrant open-source community. This ensures ongoing support, updates, and the availability of various addons and plugins that enhance its functionality.

In summary, Storybook was chosen to enhance the development workflow, improve collaboration, and ensure a high-quality and visually consistent user interface in our project.

- [Storybook](./.storybook/DOC.md)

## Using react-native-svg-transformer for Icon Customization

### Introduction

In our project, we leverage `react-native-svg-transformer` to enhance the customization of SVG icons. This library allows us to change icon colors dynamically and pass additional props easily.

### Why react-native-svg-transformer?

1. **Color Customization**: With `react-native-svg-transformer`, we can dynamically change the color of SVG icons. This is crucial for maintaining a consistent and visually appealing design across the application.

2. **Additional Props**: The library allows us to pass additional props to SVG icons, enhancing their versatility. This is particularly useful when we need to customize the behavior of individual icons within different components.

3. **Efficient Asset Handling**: `react-native-svg-transformer` efficiently handles SVG assets, ensuring optimal performance and reducing the app's overall size.

You can find the configuration file at .svgrrc in the root of your project. This file is crucial for specifying how the SVG transformer should handle SVG files during the build process.
