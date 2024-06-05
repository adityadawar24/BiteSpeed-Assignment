import { create } from "zustand"; // Import Zustand for state management

// Create a Zustand store named "useActiveNodeStore"
const useActiveNodeStore = create((set) => ({
  // Define initial state
  activeNodeId: null, // Currently active node ID (null by default)

  // Define actions to update the state
  setActiveNodeId: (nodeId) => set(() => ({ activeNodeId: nodeId })),
}));

// Export the store to be used in other components
export default useActiveNodeStore;

