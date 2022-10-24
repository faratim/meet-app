import React, { Component } from 'react';

class Event extends Component {
    state = {
        detailsVisible: false,
    }

    handleDetailsToggle = () => {
        if (!this.state.detailsVisible) {
            this.setState({ detailsVisible: true });
        } else {
            this.setState({ detailsVisible: false });
        }
    };

    render() {
        const { event } = this.props;
        
        return (
            <div className="EventContainer">
                
                <h2 className="event-name"></h2>
                <p className="event-info"></p>

                {this.state.detailsVisible ? (
                <>
                    <div className="details">
                        <h4 className="details-title">About Event</h4>
                        <a className="details-link">See details on Google Calendar</a>
                        <p className="details-details"></p>
                    </div>
                    <button 
                        className="hide-details"
                        onClick={this.handleDetailsToggle}>
                    Hide Details
                    </button>
                </>
                ) : (
                    <button
                        className="show-details"
                        onClick={this.handleDetailsToggle}
                    >
                        Show Details
                    </button>
                 )
                };

                <div className="EventDetails">
                    <button onClick={this.handleDetailsToggle()}></button>  
                </div>

            </div>
        )
    }
};

export default Event;