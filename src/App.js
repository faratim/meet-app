import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { InfoAlert } from './Alert';
import { getEvents, extractLocations } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//import { mockData } from './mock-data';

class App extends Component {
    state = {
        events: [],
        locations: [],
        seletedLocation: 'all',
        eventCount: 32,
    };

    componentDidMount() {
        this.mounted = true;
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({ events, locations: extractLocations(events) });
            }
        });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    updateEvents = (location, inputNumber) => {
        const { eventCount, seletedLocation } = this.state;
        if (location) {
            getEvents().then((events) => {
                const locationEvents = location === 'all' ? events : events.filter((event) => event.location === location);
                const eventsToShow = locationEvents.slice(0, eventCount);
                this.setState({
                    events: eventsToShow,
                    seletedLocation: location,
                });
            });
        } else {
            getEvents().then((events) => {
                const locationEvents = seletedLocation === 'all' ? events : events.filter((event) => event.location === seletedLocation);
                const eventsToShow = locationEvents.slice(0, inputNumber);
                this.setState({
                    events: eventsToShow,
                    eventCount: inputNumber,
                });
            });
        }
    };

    getData = () => {
        const { locations, events } = this.state;
        const data = locations.map((location) => {
            const number = events.filter((event) => event.location === location).length;
            const city = location.split(', ').shift();
            return { city, number };
        });
        return data;
    };

    render() {
        return (
            <div className='App'>
                <h1>Meet App</h1>
                <h4>Choose your nearest city.</h4>
                {!navigator.onLine && (
                    <InfoAlert
                        className='alert-centered'
                        text='App is currently offline. You are seeing data from the last time you logged in which may be out of date.'
                    />
                )}
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents updateEvents={this.updateEvents} />

                <div className='data-vis-wrapper'>
                    <h4>Events in each city</h4>
                    <EventGenre events={this.state.events} />
                    <ResponsiveContainer height={400}>
                        <ScatterChart
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis type='category' dataKey='City' name='city' />
                            <YAxis type='number' dataKey='number' name='# of events' />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter data={this.getData()} fill='#8884d8' />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>

                <EventList events={this.state.events} />
            </div>
        );
    }
}

export default App;
