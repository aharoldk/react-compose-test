import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";

describe('Header', () => {
  function headerComponent() {
    return shallow(<Header />)
  }

  describe('render', function () {
    it('should have header-text', function () {
      const header = headerComponent().find('#header-text');
      
      expect(header).toHaveLength(1);
      expect(header.props().children).toEqual('Dog');
    });
  });
});
