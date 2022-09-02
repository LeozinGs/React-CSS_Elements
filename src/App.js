
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

    const n = 15

    const redTitle = false

  return (
    <div className="App">

      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de Componente */}
      <MyComponent/>

      {/* Inline CSS */}
      <p style={{
        color: "blue",
        padding: "15px", 
        borderTop: "2px solid red"
      }}>
        Este elemento foi estilizado INLINE
      </p>

      {/* CSS Inline Dinâmico */}
      <h2 style={
          n < 10 ? ({
            color: "purple"
          }):({
            color: "pink"
          })
        }>
        CSS INLINE DINAMICO
      </h2>
      <h2 style={
          n > 10 ? ({
            color: "purple"
          }):({
            color: "pink"
          })
        }>
        CSS INLINE DINAMICO
      </h2>

      {/* Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâminca
      </h2>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
