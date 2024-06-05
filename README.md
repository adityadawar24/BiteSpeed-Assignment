Getting Started

Installation:

If you haven't already, install the project's dependencies using a package manager like npm or yarn:

Bash
npm install
Use code with caution.

This will ensure all necessary libraries are available for the application to run correctly.

Running the Application:

Once the dependencies are installed, start the development server by running:

Bash
npm start


This will typically launch the application in your default web browser, usually at http://localhost:3000/ or a similar address.

   i. Drag and drop text nodes from the nodes panel onto the canvas.
  ii. Connect nodes together by dragging from the source handle to the target handle.
 iii. Edit node text by selecting a node and using the settings panel.
  iv. Save the flow using the save button. Also it will throw error message if their less than 1 node unconnected.

  Features:
1. Text Node
   a. Our flow builder currently supports only one type of message (i.e Text
    Message).
   b. There can be multiple Text Nodes in one flow.
   c. Nodes are added to the flow by dragging and dropping a Node from the
   Nodes Panel.
2. Nodes Panel
   a. This panel houses all kind of Nodes that our Flow Builder supports.
   b. Right now there is only Message Node, but we’d be adding more types
   of Nodes in the future so make this section extensible
3. Edge
   a. Connects two Nodes together
4. Source Handle
   a. Source of a connecting edge
   b. Can only have one edge originating from a source handle
5. Target Handle
   a. Target of a connecting edge
   b. Can have more than one edge connecting to a target handle
6. Settings Panel
   1. Settings Panel will replace the Nodes Panel when a Node is selected
   2. It has a text field to edit text of the selected Text Node
7. Save Button
   a. Button to save the flow
   b. Save button press will show an error if there are more than one Nodes
   and more than one Node has empty target handles