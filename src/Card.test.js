import React from 'react';
import { shallow} from 'enzyme';
import {Card} from "./Card";
import datas from './data';

describe('Card', () => {
  const openedTrue =  true;
  const handleClick = jest.fn();
  const name = datas[0].name;
  const picture = datas[0].picture;
  const description = datas[0].description;

  function cardComponent(opened = false) {
    return shallow(<Card
      handleClick={handleClick}
      opened={opened}
      name={name}
      picture={picture}
      description={description}
    />)
  }

  describe('render', function () {
    it('should have #header-card', function () {
      const headerCard = cardComponent().find('#header-card');

      expect(headerCard).toHaveLength(1);

      expect(headerCard.props().onClick).toBeInstanceOf(Function);
      expect(headerCard.props().children).toEqual(name);

      headerCard.simulate('click');

      expect(handleClick).toHaveBeenCalled();
    });

    it('should have #img-card', function () {
      const imgCard = cardComponent().find('#img-card');

      expect(imgCard).toHaveLength(1);
      expect(imgCard.props().src).toEqual(picture);
      expect(imgCard.props().alt).toEqual(name);
    });

    it('should have #description-card', function () {
      const descriptionCard = cardComponent().find('#description-card');

      expect(descriptionCard).toHaveLength(1);
      expect(descriptionCard.props().children).toEqual(description);
    });

    describe('handleClick', function () {
      it('should have card closed class name when opened false', function () {
        const card = cardComponent();
        expect(card.find('.closed')).toHaveLength(1);
      });

      it('should have card open class name when opened true', function () {
        const card = cardComponent(openedTrue);

        expect(card.find('.open')).toHaveLength(1);
      });
    });
  });
});
