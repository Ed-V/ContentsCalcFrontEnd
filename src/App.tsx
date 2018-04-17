import * as React from 'react';
import ItemsList from './components/ItemsList';
import ItemInputContainer from './containers/ItemInputContainer';
import './css/App.css';
import { ItemList } from "./models/ItemsStore";


const itemList = ItemList.create()

class App extends React.PureComponent {
  public render() {
    return (
      <div className="App">
        <ItemsList itemList={itemList} />
        <ItemInputContainer itemList={itemList} />
      </div>
    );
  }
}

export default App;
