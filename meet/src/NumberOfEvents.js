import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    }
    
    render() {
        
        return (
            <div className="number-of-events">
                <label> Number of Events
                    <input
                        type="number"
                        className="number-of-events-input"
                        value={this.state.numberOfEvents}
                    ></input>
                </label>
                
            </div>
        );
    }
}

export default NumberOfEvents;