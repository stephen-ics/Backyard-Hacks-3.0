import React from 'react'
import TimelineData from '../data/TimelineData'
import TimelineItem from './TimelineItem'

import './component-styles/Timeline.css'

const Timeline = ({ id }) =>
    TimelineData.length > 0 && (
        <div className="timeline-container">
            {TimelineData.map(data => (
                <TimelineItem data={data} id={id} />
            ))}
        </div>
    );

export default Timeline;