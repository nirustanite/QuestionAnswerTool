import React from 'react';
import { shallow } from 'enzyme';
import Nav from 'Components/Nav/Nav';
import HomePage from 'Pages/HomePage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn().mockReturnValue({
      pathname: '/',
    }),
    useRouteMatch: jest.fn().mockReturnValue({
        url: '/'
    }) 
}));

describe('Nav', () => {

    it('renders without error', () => {
		const wrapper = shallow(<Nav />);
		expect(wrapper.length).toEqual(1);
	});

    it("becomes active when the item is clicked", () => {
        const wrapper = shallow(<Nav />);
        const menuComponent = wrapper.find('Menu.Item')
        expect(menuComponent.find(".active .item")).toBeTruthy();
    });

});
