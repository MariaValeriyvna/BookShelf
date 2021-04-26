import React from "react";
import { shallow } from "enzyme";
import { PreLoader } from "..";


describe("<PreLoader /> elements", () => {
  const component = shallow(
    <PreLoader />
  );

  it("should render 1 <PreLoader />", () => {
    expect(component).toHaveLength(1);
  });
});
