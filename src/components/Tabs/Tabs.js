import styles from './Tabs.module.css';
import React, { useState } from 'react';

export const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            title: 'Title 1'
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            title: 'Title 2'
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            title: 'Title 3'
        }
    ];
    
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className={styles.content}>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <p className={styles.title}>{tab.title}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}   



