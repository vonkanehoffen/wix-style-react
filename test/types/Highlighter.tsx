import * as React from "react";
import Highlighter from "../../src/Highlighter";
import { highlighterTestkitFactory } from "../../dist/testkit";
import { highlighterTestkitFactory as highlighterEnzymeTestkitFactory } from "../../dist/testkit/enzyme";
import * as enzyme from "enzyme";

function HighlighterWithMandatoryProps() {
  return <Highlighter />;
}

function HighlighterWithAllProps() {
  return <Highlighter dataHook="hook" styles="font: 14px" match="abc" />;
}

async function testkits() {
  const testkit = highlighterTestkitFactory({
    dataHook: "hook",
    wrapper: document.createElement("div")
  });

  const enzymeTestkit = highlighterEnzymeTestkitFactory({
    dataHook: "hook",
    wrapper: enzyme.mount(<div />)
  });
}
