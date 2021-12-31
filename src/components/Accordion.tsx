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
    content: React.ReactNode,
    date: React.ReactNode,
    attachFile: React.ReactNode,
}

export const Accordion: React.FC<AccordionProps> = ({ title, content, date, attachFile }) => {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('transform duration-700 ease')

    const contentSpace = useRef(null)

    function toggleAccordion() {
        setActive(active === false ? true : false)
        // setActive((prevState) => !prevState)
        // @ts-ignore
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
    }

    return (

        <div className={ active ? 'accordion-item active' : 'accordion-item'}>

            <IonRow className="accordion-button ion-align-items-center">
                <IonCol className="accordion-edit-button">
                    <IonButton fill="clear">
                        <IonIcon icon={createOutline} />
                    </IonButton>
                </IonCol>
                <IonCol className="accordion-click-button">
                    <IonButton
                        className=""
                        expand="block" 
                        fill="clear"
                        onClick={toggleAccordion}
                    >
                        <div className="accordion-click-button-inner">
                            <p className="inline-block text-footnote light">{title}</p>
                            <IonIcon className="accordion-arrow" />

                        </div>
                    </IonButton>
                    <span className="post-date">{date}</span>
                </IonCol>
            </IonRow>

            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="panel overflow-auto transition-max-height duration-700 ease-in-out"
            >
                <div className="accordion-content">
                    <p>{content}</p>
                    <div className="attached-files-list">
                        <div className="attached-file">{attachFile}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}