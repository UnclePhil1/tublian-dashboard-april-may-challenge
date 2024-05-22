import React, { useState } from 'react';
import styles from './styles.module.css'; // Import CSS module for styles

//  TOGGLE BUTTON FOR THE FREELANCE. SWITCHING BETWEEN FREELANCE AND FULLTIME

const ToggleBtn = () => {
    // DECLEARING A USESTATE TO CHECK AND SWITCH THE CURRENT STATE OF THE BUTTONS
    const [isFreelance, setIsFreelance] = useState(false);

    // RENDERING THE USESTATE IN A FUNCTION
    const toggleFreelance = () => {
        setIsFreelance(!isFreelance);
    };

    return (
        <div>
            <div className={`border border-baseTwo bg-baseOne p-[2px] rounded-lg flex justify-center items-center gap-2 ${styles.container}`}>
                <button
                    className={`text-[12px] text-nowrap p-2 rounded-lg ${isFreelance ? '' : styles.gradient_bg}`}
                    onClick={toggleFreelance}
                >
                    Full Time
                </button>
                <button
                    className={`text-[12px] text-nowrap p-2 rounded-lg ${isFreelance ? styles.gradient_bg : ''}`}
                    onClick={toggleFreelance}
                >
                    Freelance
                </button>
            </div>
        </div>
    );
};

export default ToggleBtn;
