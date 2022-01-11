import React, {useState, useEffect} from 'react';

import { 
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonSearchbar,
    IonCheckbox
} from '@ionic/react';

import '../assets/css/Custom.css';
import '../assets/css/Responsive.css';

export const SEARCH = [
    {
        name: "Raul. C",
        apt: "501",
        role: "Janitor",
        val:"",
        isChecked: false
    },
    {
        name: "Raul. F",
        apt: "502",
        role: "Tenant",
        val:"",
        isChecked: false
    },
    {
        name: "Raul. X",
        apt: "502",
        role: "Tenant",
        val:"",
        isChecked: false
    },
    {
        name: "Raul. D",
        apt: "601",
        role: "Tenant",
        val:"",
        isChecked: false
    },
    {
        name: "Raul. B",
        apt: "501",
        role: "Tenant",
        val:"",
        isChecked: false
    },
    {
        name: "John. X",
        apt: "502",
        role: "Tenant",
        val:"",
        isChecked: false
    },
    {
        name: "John. D",
        apt: "601",
        role: "Tenant",
        val:"",
        isChecked: false
    },
    {
        name: "John. B",
        apt: "501",
        role: "Tenant",
        val:"",
        isChecked: false
    },
  ];
  

const StartConversationPopup: React.FC = () => {

    const [checked, setChecked] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSearch, setFilteredSearch] = useState([
    {
        name: "",
        apt: "",
        role: "",
        val:"",
        isChecked: false
    }])
  
    useEffect(() => {
        let tempSearchResult = SEARCH.filter(ele => ele.name.includes(searchQuery))
        setFilteredSearch([...tempSearchResult])
    },[searchQuery])

    const toggleChange = () => {
        setChecked(!checked,);
    }

    return (

        <IonGrid className="start-conversation-popup-wrapper">

            <div className="popup-title">
                <h3>Start a <span>Conversation</span></h3>
            </div> 

            <div className="popup-content">

                <div className="search-box-wrapper">
                    <IonSearchbar mode="ios" placeholder="Search Apt # or Contact name" value={searchQuery} onIonChange={e => setSearchQuery(e.detail.value!)}></IonSearchbar>
                    <div className={`search-results ${!searchQuery ? 'hide-div' : ''}`}>
                        <p>Search results</p>
                        <IonRow className="search-results-header">
                            <IonCol className="search-results-header-name" size="4">Name</IonCol>
                            <IonCol className="search-results-header-apt" size="4">Apt #</IonCol>
                            <IonCol className="search-results-role" size="4">Role</IonCol>
                        </IonRow>
                        <div className="serach-results-inner">
                            {/* {filteredSearch.map((search, isChecked, i) => ( */}
                            {filteredSearch.map(( search, i) => (
                                <IonRow key={i} className={`search-results-rows ${ checked ? 'row-checked' : ''}`}>
                                    <IonCol className="search-results-col-name" size="4">{search.name}</IonCol> 
                                    <IonCol className="search-results-col-apt" size="4">{search.apt}</IonCol> 
                                    <IonCol className="search-results-col-role" size="4">{search.role}</IonCol> 
                                    <IonCheckbox value={search.val} checked={checked} onIonChange={() => toggleChange} />
                                </IonRow>
                            ))}
                        </div> 
                        <div className="ion-text-end">
                            <IonButton className="select-all-result-button" fill="outline" shape="round">
                                Select All
                            </IonButton>
                        </div>
                    </div>
                </div>
                <IonRow  className="popup-buttons">
                    <IonCol size="6">
                        <IonButton className="exit-button" fill="outline" shape="round">
                            Exit
                        </IonButton>
                    </IonCol>
                    <IonCol size="6">
                        <IonButton className="secondary-button" fill="outline" shape="round">
                            Confirm
                        </IonButton>
                    </IonCol>
                </IonRow>
            </div>

        </IonGrid> 
        // </IonPopover>
        
    );
};

export default StartConversationPopup;