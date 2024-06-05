import { v4 as uuidv4 } from "uuid"; // Import for generating unique IDs (version 4)
import NODES from "../reactflow/nodes"; // Import node data (assuming it's in a separate file)
import { NODE_WIDTH } from "./constant"; // Import constant for node width

// Function to generate a unique identifier using version 4 of the UUID library
export const generateUUID = () => {
  return uuidv4();
};

// Function to create a new node object with default properties
export const getNewNode = (type, position) => {
  // Generate a unique ID for the new node
  const id = generateUUID();

  // Create a new node object based on the provided type
  return {
    id, // Use the generated ID
    type, // Set the node type
    position: {
      // Calculate the initial position based on the click position and node width
      x: position.x - NODE_WIDTH / 2,
      y: position.y - 40,
    },
    data: {
      // Copy the default data associated with the node type from the NODES import
      ...NODES[type].data,
    },
  };
};
