import React, { useState } from 'react';
import styles from './styles.module.css'; // Import CSS module for styles

const ToggleBtn = () => {
    const [isFreelance, setIsFreelance] = useState(false);

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
