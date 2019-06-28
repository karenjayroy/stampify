import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import AddCard from "../client/components/AddCard";
import AddStampBox from "../client/components/AddStampBox";
import { tsPropertySignature } from "@babel/types";

Enzyme.configure({ adapter: new Adapter() });

describe("testing add card component", () => {
  it("Add Card renders", () => {
    const component = shallow(<AddCard />);
    const wrapper = component.find("#addMe");
    expect(wrapper.length).toBe(1);
  });
});

describe("testing button functionality for add stamp box", () => {
  test("adds stamp to box", () => {
    const mockFn = jest.fn();
    let component = shallow(<AddStampBox addStamp={mockFn} />);
    component.find("button").simulate("click", "junk");
    // const instance = component.instance();
    // instance.btnClick = jest.fn(instance.btnClick);
    // button.simulate("click");
    // console.log("it hits");
    expect(mockFn.mock.calls.length).toEqual(1);
    // expect(instance.onClick).toHaveBeenCalled();
    // button.props().onClick();
  });
});
