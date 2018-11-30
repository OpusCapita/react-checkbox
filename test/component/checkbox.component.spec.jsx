/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Checkbox from '../../src/index';

describe('Example component', () => {
  it('is clicked', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<Checkbox onChange={onChange} />);
    expect(wrapper).to.exist;
    const input = wrapper.find('input');
    expect(input)
      .to
      .have
      .length(1);
    input.simulate('change');
    expect(onChange.calledOnce).to.be.true;
  });

  it('is disabled', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<Checkbox onChange={onChange} disabled />);
    const input = wrapper.find('input');
    expect(input)
      .to
      .have
      .length(1);
    input.simulate('change');
    expect(onChange.callCount)
      .to
      .equal(0);
  });
});
