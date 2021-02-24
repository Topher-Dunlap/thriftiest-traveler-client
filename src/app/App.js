import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NavRoutes from '../components/NavRoutes';
import ThemeContext from '../components/ThemeContext';
function App() {

  return (
      <ThemeContext.Provider value={contextValue}>
          <main>
            <NavBar/>
            <div>
              <ErrorBoundary>
                <NavRoutes/>
                <Footer/>
              </ErrorBoundary>
            </div>
          </main>
      </ThemeContext.Provider>
  );
}

export default App;

const contextValue = {
    centerText: {
        textAlign: "center",
    },
    formInputStyle: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
    },
    formElementSpacing: {
        margin: "0px 10px",
        textAlign: "left",
    },
    formStyle: {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        margin: "2rem 2rem",
        padding: "1rem 2rem 2rem",
    },
    formButtonStyle: {
        width: "100%",
        backgroundColor: "#333029",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
}