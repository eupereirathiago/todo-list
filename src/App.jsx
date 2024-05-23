import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css"
import Paths from "./routes/Paths";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services";



const App = () => {
  return ( 
    <>
      <QueryClientProvider client={queryClient}>
        <Paths/>
     </QueryClientProvider>
    </>
   );
}
 
export default App;