import React from 'react';
import { IonItem, IonAvatar, IonLabel } from '@ionic/react';
import { EventData } from './../models/event.model'

export const EventItem: React.FC<{ event: EventData }> = ({ event }) => {
	return (
		<IonItem>
			<IonAvatar slot="start">
				<img src={ "src/examples/img/"+event.photo} />
			</IonAvatar>
			<IonLabel>
				<h2>{event.name}</h2>
				<p>{ event.description}</p>
			</IonLabel>
		</IonItem>
	);
}