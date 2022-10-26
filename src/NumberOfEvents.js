import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    }
    
    changeNumberOfEvents(value) {
        this.setState({ numberOfEvents: value });
    }

    render() {
        
        const { numberOfEvents } = this.state;

        return (
            <div className="number-of-events">
                <label> Number of Events
                    <input
                        type="number"
                        className="number-of-events-input"
                        value={this.state.numberOfEvents}
                        onChange={(event) => {
                            this.changeNumberOfEvents(event.target.value);
                        }}
                    ></input>
                </label>
                
            </div>
        );
    }
}

export default NumberOfEvents;