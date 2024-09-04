import { useState } from "react"
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineWidgets } from "react-icons/md";

import './index.css'


const TabWidget =()=>{
    const [activeTab, setAvtiveTab] = useState('About Me')


    const renderContent = ()=>{
        switch(activeTab){
            case  'About Me':
                return(
                    <div>
                    <p className="para-1">
                        Hello! Iam Dave, your sales rep here from Saleforce. I have been working at this awesome company for 3 years now.</p>
                       <p> I was born and raised in Alnaby, Ny & have been living in Santa Carla for the past 10 Years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella.
                        Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                    </p>
                    </div>
                )
            case 'Experiences':
                return <p>Experiences content goes here...</p>
            case 'Recommended':
                return <p>Recommended content goes here...</p>
            default:
                return null
        }
    }
    return(
        <div className="tab-widget">
            <div className="right-bar">
               <p className="icon-1">
                    <BsQuestionCircle/>
                </p>
                <p className="icon-1">
                   <MdOutlineWidgets/>
                </p>
            </div>
            <div>
                <div className="tabs">
                    {['About Me', 'Experiences', 'Recommended'].map((tab) =>(
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? 'active' : 'tab-button'}`} 
                            onClick={() => setAvtiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}


export default TabWidget