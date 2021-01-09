import React from 'react';
import { shallow } from 'enzyme';
import HomePage from 'Pages/HomePage';
import Page from 'Pages/Page';

describe('HomePage', () => {

    it('renders without error', () => {
		const wrapper = shallow(<HomePage />);
		expect(wrapper.length).toEqual(1);
	});

    it('should render the HomePage Component correctly', () => {   
        const wrapper = shallow(<Page>Welcome</Page>);
        expect(wrapper).toMatchSnapshot();
    });

});