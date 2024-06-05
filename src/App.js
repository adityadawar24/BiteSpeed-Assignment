import { ReactFlowProvider } from "reactflow";  // Import for providing ReactFlow context

// Import custom Reactflow component 
import Reactflow from "./reactflow";

import { Bounce, ToastContainer } from "react-toastify";  // Imports for toast notifications

// Import CSS styles for Reactflow and React-Toastify
import "reactflow/dist/style.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return ( ////Wrap the application with ReactFlowProvider
    <ReactFlowProvider>   
      <Reactflow />  {/* Render the custom Reactflow component */}
      <ToastContainer
        position="top-center"  
        autoClose={2000}       
        hideProgressBar={false} 
        closeOnClick={true}     
        pauseOnHover={false}    
        draggable={true}       
        progress={undefined}  
        theme="colored"        
        transition={Bounce}    
      />
    </ReactFlowProvider>
  );
}

export default App;
