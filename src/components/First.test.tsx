import First from "./First";
import { shallow } from "enzyme";
import React from 'react';

describe('First component testing', function () {
  test('starting', function () {
    const component = shallow(<First/>);
    console.log(component.debug());
    const num = component.find(".firstWrapper");
    expect(num.length).toBe(1);
  })
})