import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { Person } from './../models/person.model'
import { EventItem } from './../components/EventItem'
import data from './../examples/events.json'
import { EventData } from '../models/event.model';

const Tab2: React.FC = () => {

    const [events, setEvents] = useState<EventData[]>([]);
    

    useIonViewDidEnter(() => {
        (async () => {
            
            //const result = await fetch('https://cors-anywhere.herokuapp.com/https://localhost:7062/api/User/get', {
            //    headers: { 'Content-Type': 'application/json' }
            //});
            //const response = await fetch('../examples/events.json'); // Assuming the file is in the public folder
            //const eventData = await response.json();
            
            setEvents(data);
        })();
    });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
                  {events.map((event, idx) => <EventItem key={idx} event={ event} />) }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
