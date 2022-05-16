import logo from './logo.svg';
import './App.css';
import GameTable from './game/TableGame/table';
import { useSelectedCordenates } from './global/hook/selectedCordenates';
import GameApp from './game';
import { usePageContent } from './global/hook/page';
import { Wellcome } from './game/wellcome/apresentacao';

function App() {
  const {SelectedCordenates, setSelectedCordenates} = useSelectedCordenates();
  const {PageContent, setPageContent}= usePageContent()
  function AppScreen(){
    if (PageContent != "" || PageContent != null || PageContent != undefined){
      switch(PageContent){
        case 1:
          return(<Wellcome />)
          break
        case 2:
          return(<GameApp />)
    }
    }
    }

  return (
    <div className="App">
      <GameApp />
    </div>
  );
}

export default App;
