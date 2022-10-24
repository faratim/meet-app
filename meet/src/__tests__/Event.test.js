import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
    let event, EventWrapper;
    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={mockData[0]} />);
    })
    
    test('Event name rendered', () => {
        expect(EventWrapper.find('.event-name')).toHaveLength(1);
    });

    test('Event info rendered', () => {
        expect(EventWrapper.find('.event-info')).toHaveLength(1)
    });

    test('Show details button rendered', () => {
        expect(EventWrapper.find('.show-details')).toHaveLength(1);
    });

    test('Event details shown on click', () => {
        EventWrapper.setState({
            detailsVisible: true
        })
        // confirm event details are shown
        expect(EventWrapper.find('.details')).toHaveLength(1);
        // confirm hide details button is shown
        expect(EventWrapper.find('.hide-details')).toHaveLength(1);
    });

})