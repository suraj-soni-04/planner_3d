# Planner_3d

This is a simple React application that allows users to drag and drop images onto a canvas, rotate and zoom them. 

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>

2. Navigate into the project directory:
    ```bash
    cd planner_3d

3. Install dependencies:
    ``` bash
    npm install
    
4. Start Server
   ``` bash
   npm start

This will open the application in your default web browser.
<hr>

## Components

## DraggableImage

This component represents an image that can be dragged and dropped onto the canvas.

### Props

- `imageUrl`: URL of the image.
- `onDrag`: Function to be called when the image is dragged.
- `isSelected`: (Optional) Indicates whether the image is selected.

## ToolComponent

This component contains draggable images that users can select and drag onto the canvas.

### Props

- `setActiveComponent`: Function to set the active component.
- `onImageDrag`: Function to be called when an image is dragged onto the canvas.

## PreviewComponent

This component provides buttons to rotate, zoom in, zoom out, modify, or delete the image on the canvas.

### Props

- `setActiveComponent`: Function to set the active component.
- `onRotate`: Function to be called when the image is rotated.
- `onZoomIn`: Function to be called when the image is zoomed in.
- `onZoomOut`: Function to be called when the image is zoomed out.
- `onModify`: Function to be called to modify the image.
- `onDelete`: Function to be called to delete the image.

## ImageViewer

This component displays the image on the canvas and provides functionality to zoom and rotate the image.

### Props

- `imageUrl`: URL of the image.
- `onZoom`: Function to be called when the image is zoomed.
- `onRotate`: Function to be called when the image is rotated.

## DropTarget

This component acts as a drop target for draggable images.

### Props

- `onDrop`: Function to be called when an image is dropped onto the canvas.
- `children`: Child elements.

## DisplayComponent

This component represents the main canvas where images can be dropped, rotated, and zoomed.

### Props

- `setActiveComponent`: Function to set the active component.
<hr>

![Screenshot (143)](https://github.com/suraj-soni-04/planner_3d/assets/154866411/f8e8119c-7043-4bd7-8229-a3c40a2ee83b)

![Screenshot (144)](https://github.com/suraj-soni-04/planner_3d/assets/154866411/d1969ff3-bbae-4c7b-80c3-3c7a5248b72d)

