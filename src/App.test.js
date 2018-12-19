import React from 'react';
import { mount } from 'enzyme';
import App from "./App";
import datas from './data';

describe('App', () => {

  function appComponent(datas = []) {
    return mount(<App datas={datas}/>);
  }
  describe('render', function () {
    it('should have #spinner when no data', function () {
      const app = appComponent();

      expect(app.find('#spinner')).toHaveLength(1);
    });

    describe('when have data', function () {
      it('should have #main-header', function () {
        const app = appComponent(datas);

        expect(app.find('#main-header')).toHaveLength(1);
      });

      it('should have Card component equal with datas length', function () {
        const app = appComponent(datas);

        expect(app.find('Card')).toHaveLength(datas.length);
      });

      it('should send props to Card', function () {
        const app = appComponent(datas);
        const card = app.find('Card').at(0).props();

        expect(card.name).toEqual(datas[0].name);
        expect(card.picture).toEqual(datas[0].picture);
        expect(card.description).toEqual(datas[0].description);
      });
    });
  });
});
