import React from 'react';
import { shallow } from 'enzyme';
import Nav from 'Components/Nav/Nav';


describe('Nav', () => {

    it('renders without error', () => {
		const wrapper = shallow(<Nav />);
		expect(wrapper.length).toEqual(1);
	});

    it("becomes active when the item is clicked", () => {
        const wrapper = shallow(<Menu />);
        wrapper.find(".item").simulate("click");
        expect(wrapper.state("active")).toBeTruthy();
    });
});
