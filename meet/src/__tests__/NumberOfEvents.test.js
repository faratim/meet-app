import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('element is rendered', () => {
        expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
    });

    test('input box is rendered', () => {
        expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
    });

    test('default number is 32', () => {
        expect(NumberOfEventsWrapper.find('.number-of-events-input').prop('value')).toEqual(32);
    })
})