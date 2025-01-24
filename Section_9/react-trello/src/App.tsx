import Header from './components/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Homepage from './components/Homepage';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Homepage />
    </DndProvider>
  );
}

export default App;