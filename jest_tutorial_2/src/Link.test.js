import React from 'react';
import Link from './Link.react'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<Link page="www.softwaretestinghelp.com" />)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});