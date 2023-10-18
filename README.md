# Strapi Submenus App

This project is a React application that showcases the implementation of submenus within a navigation interface. It includes components such as Navbar, Hero, Sidebar, and Submenu, enabling users to explore various pages and sublinks within the application.

## Project Link

You can access the live version of the project by visiting [Project Link](https://example.com).

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Global Context: Utilized for managing global state.
- CSS: Applied for styling the components.
- React Icons: An optional addition for using icons in the project.

## Project Overview

### Data and Global Context

The project begins by exploring the `data.jsx` file, which contains the data structure used in the application. It sets up a global context with an `isSidebarOpen` state value (boolean) and two functions: one for closing and the other for opening the sidebar. These global values are made available throughout the application.

### Components

Four key components are developed within the project:

#### Navbar

In the Navbar component, a logo (h3) and a button to open the sidebar are established. The `openSidebar` function from the global context is utilized. You may optionally incorporate icons from the React Icons library for the toggle button. The Navbar is also styled with CSS.

#### Hero

The Hero component is designed and styled as part of the application.

#### Sidebar

The Sidebar component is responsible for displaying sublinks, imported from `data.jsx`. It iterates through the list and renders the links within the component. The component is styled with a focus on toggling the sidebar's visibility using the `isSidebarOpen` state and `closeSidebar` function from the global context.

#### Submenu

This component is responsible for managing submenus. It uses a `pageId` state value from the global context, initially set to `null`, and makes it accessible throughout the application. In the Navbar, when the user hovers over a link, the `pageId` is set to the specific page ID. In the Submenu component, the `pageId` is retrieved from the global context, and based on that ID, the component displays the corresponding page and links. Submenu styling is also applied to enhance its appearance.

### Edge Cases

The project includes considerations for handling various edge cases, ensuring a smooth user experience.

## Additional Features

### 3D Effect

The application employs a 3D effect for visual appeal. CSS transformations are used to rotate and shift elements, creating a tilted and rotated appearance.

```css
transform: rotateX(-90deg) translateX(-50%);
transform-origin: top;
perspective: 1000px;
```

These CSS properties enable the elements to appear as if they are viewed from above and at an angle.

### Mouse Events

The following mouse events are implemented within the project:

- `onMouseEnter`: Triggered when the mouse cursor enters an element.
- `onMouseOver`: Triggered when the mouse cursor moves over an element or its child elements.
- `onMouseLeave`: Triggered when the mouse cursor leaves an element.

These events are used to enhance interactivity and user experience within the application.

The project offers an engaging user interface, providing easy navigation through submenus and incorporating visually appealing 3D effects.
