import './SeasonDisplay.css'
import React from 'react';

const getSeason = (lat) => {
    const month = new Date().getMonth();
    return month > 2 && month < 9 ? ( lat > 0 ? 'summer' : 'winter' ) : ( lat < 0 ? 'summer' : 'winter' );
 }

const SeasonDisplay = props => {
    const season = getSeason(props.lat);
    const data = season === 'winter' ? { text: 'Burr, its chilly', icon: 'snowflake'} : {text: 'Lets hit the beach', icon: 'sun'}
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${data.icon} icon`}></i>
            <h1>
            { data.text }
            </h1>
            <i className={`icon-right massive ${data.icon} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;