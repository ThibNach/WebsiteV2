import { useState }          from "react";
import { useTimelineItems }  from "../Hooks/useTimelineItems";
import "../Styles/TimeLine.css";
import { type TimelineItem } from "../Schemas/Portfolio.schema";
import {
    ErrorDiv,
    LoadingDiv,
} from "../../../_Shared/Components/FetchDataComponents";

const DescriptionList = (
    { title, items }:
    { title: string, items: string[] } ) => {
    if( items.length === 0 ) {
        return null;
    }
    return (
        <div className="timeline-description">
            <h5 className="timeline-description-title">{ title }</h5>
            <div className="timeline-description-content">
                <ul className="list-group-flush">
                    { items.map( (
                                     text,
                                     index,
                                 ) => <li key={ index }>{ text }</li> ) }
                </ul>
            </div>
        </div>
    
    );
};

const TimelineDescription = (
    { timelineItem }:
    { timelineItem: TimelineItem } ) => {
    return (
        <div className="container">
            
            <p className="engine-badge">
                Made with
                <span className="highlight">{ " " + timelineItem.engineName }</span>
            </p>
            <ul className="list-inline">
                <li className="list-inline-item"><p className="engine-badge">
                    { "Target" + ( timelineItem.targets.length > 1 ? "s" : "" ) + " : " }</p></li>
                { timelineItem.targets.map(
                    (
                        target,
                        index,
                    ) => (
                        <li key={ index } className="list-inline-item">
                            <span className="highlight">{ target.displayName }</span>
                        </li>
                    ),
                ) }
            </ul>
            <DescriptionList title="Game Details" items={ timelineItem.gameDescriptions }/>
            <DescriptionList title="My work" items={ timelineItem.workDescriptions }/>
        </div>
    );
};

const TimelineItem = (
    { item, isOpen, onClick }:
    { item: TimelineItem, isOpen: boolean, onClick: () => void } ) => {
    
    const dateDisplay = item.startDate === item.endDate || !item.endDate ? item.startDate : `${ item.startDate } - ${ item.endDate }`;
    
    return (
        <div className={ `timeline-item ${ isOpen ? 'open' : '' }` }>
            <div className="timeline-image-container">
                { item.image &&
                  <img src={ item.image } alt={ item.displayName }
                       className="timeline-img"/> }
            </div>
            
            <div className="timeline-middle">
                <div className="timeline-marker"></div>
            </div>
            
            <div className="timeline-content">
                <div className="timeline-header" role="button" onClick={ onClick }>
                    <div className="timeline-header-info">
                        <span
                            className="date">{ dateDisplay }</span>
                        <h3>{ item.displayName }</h3>
                    </div>
                    {item.image && (
                        <img
                            src={item.image}
                            alt={item.displayName}
                            className="timeline-img-mobile"
                        />
                    )}
                    <span className="icon">{ isOpen ? '^' : '>' }</span>
                </div>
                
                <div className={ `timeline-body-container ${ isOpen ? 'is-open' : '' }` }>
                    <div className="timeline-body-content">
                        <TimelineDescription timelineItem={ item }/>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

const Timeline = () => {
    const { timelineItems, loading, error } = useTimelineItems();
    const [ openId, setOpenId ] = useState<number | null>( null );
    
    const toggleItem = ( id: number ) => {
        setOpenId( openId === id ? null : id );
    };
    
    if( loading ) {
        return <LoadingDiv />
    }
    
    if( error ) {
        return <ErrorDiv error={ error } />
    }
    
    return (
        <div className="timeline-container">
            { timelineItems.map( ( item ) => (
                <TimelineItem
                    key={ item.id }
                    item={ item }
                    isOpen={ openId === item.id }
                    onClick={ () => toggleItem( item.id ) }
                />
            ) ) }
        </div>
    );
};

export default Timeline;