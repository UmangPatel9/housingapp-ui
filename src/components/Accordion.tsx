import React, { useRef, useState } from 'react';

import { 
    IonRow,
    IonCol,
    IonIcon,
    IonButton
} from '@ionic/react';

import { caretDownOutline, createOutline } from "ionicons/icons";

interface AccordionProps {
    title: React.ReactNode
    content: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('transform duration-700 ease')

    const contentSpace = useRef(null)

    function toggleAccordion() {
        // setActive(active === false ? true : false)
        setActive((prevState) => !prevState)
        // @ts-ignore
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
    }

    return (

        <div className="accordion-item">

            <IonRow className="accordion-button ion-align-items-center">
                <IonCol className="accordion-edit-button" size="1" sizeMd="1">
                    <IonButton fill="clear">
                        <IonIcon icon={createOutline} />
                    </IonButton>
                </IonCol>
                <IonCol className="accordion-click-button" size="11" sizeMd="11">
                    <IonButton
                        className=""
                        expand="block" 
                        fill="clear"
                        onClick={toggleAccordion}
                    >
                        <div className="accordion-click-button-inner">
                            <p className="inline-block text-footnote light">{title}</p>
                            <IonIcon icon={caretDownOutline} />
                        </div>
                    </IonButton>
                </IonCol>
            </IonRow>

            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="accordion-content panel overflow-auto transition-max-height duration-700 ease-in-out"
            >
                {content}
            </div>
        </div>
    )
}