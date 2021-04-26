import React from "react";
import { shallow } from "enzyme";
import { Button } from "./Button";

describe("<Button /> elements", () => {
  const mockFunc = jest.fn();
  const component = shallow(
    <Button text="button text" handleClick={mockFunc} isAttention />
  );

  it("should render 1 <Button />", () => {
    expect(component).toHaveLength(1);
    expect(component.find("button").text()).toEqual("button text");
  });

  it("should call onClick handler", () => {
    component.simulate("click");
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
