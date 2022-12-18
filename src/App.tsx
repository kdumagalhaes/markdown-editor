import { Template } from './components/Template';
import {EditorProvider} from './context/EditorContext'

function App() {
  return (
    <EditorProvider>
      <Template />
    </EditorProvider>
  );
}

export default App;
