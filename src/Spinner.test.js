import React from 'react';
import { shallow } from 'enzyme';
import Spinner from "./Spinner";

describe('Spinner', () => {
  function spinnerComponent() {
    return shallow(<Spinner />);
  }

  describe('render', function () {
    it('should have #spinner', function () {
      const spinner = spinnerComponent().find('#spinner');

      expect(spinner).toHaveLength(1);
      expect(spinner.props().children).toEqual('Loading...');
    });
  });
});
