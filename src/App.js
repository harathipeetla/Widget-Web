import TabWidget from "./components/TabWidget";
import GalleryWidget from "./components/GalleryWidget";
import './App.css'

const App =()=>(
    <div className="App">
        <div className="container">
            <div className="right-widgets">
                <TabWidget/>
                <GalleryWidget/>
            </div>
        </div>
        
    </div>
)

export default App
