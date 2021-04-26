import React from "react";
import { shallow } from "enzyme";
import { Errorimg } from "..";


describe("<Error /> elements", () => {
  const component = shallow(
    <Errorimg error="status" />
  );

  it("should render 1 <Error />", () => {
    expect(component).toHaveLength(1);
    expect(component.find("div").text()).toEqual("status");
  });
});
