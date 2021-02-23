import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
// import NavBar from '../components/NavBar';
// import SwitchNavRoutes from '../components/SwitchNavRoutes';
function App() {

  return (
          <main>
            {/*<NavBar/>*/}
            <div>
              <ErrorBoundary>
                {/*<SwitchNavRoutes/>*/}
                Hello!
              </ErrorBoundary>
            </div>
          </main>
  );
}


export default App;
