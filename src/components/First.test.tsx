import First from "./First";
import { shallow, ShallowWrapper } from "enzyme";
import React from 'react';

describe('Testing out First component',()=>{
  let component: ShallowWrapper;
  beforeEach(()=>{
    component = shallow(<First/>);
  })
  test('finding className firstWrapper',()=>{
    let wrapper = component.find('.firstWrapper');
    expect(wrapper.length).toBe(1);
  })
  test('finding className secondWrapper',() =>{
    let wrapper = component.find('.secondWrapper');
    expect(wrapper.length).toBe(1);
  })
  test('finding className thirdWrapper',() =>{
    let wrapper = component.find('.thirdWrapper');
    expect(wrapper.length).toBe(1);
  })
  test('finding firstData',() =>{
    let wrapper = component.find(`[data-testid='firstData']`);
    expect(wrapper.length).toBe(1);
  });
  test('finding seondData',() =>{
    let wrapper = component.find(`[data-testid='secondData']`);
    expect(wrapper.length).toBe(1);
  });
});