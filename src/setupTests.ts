import Enzyme from 'enzyme';
import EnzymeAdpter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdpter(),
  disableLifecycleMethods: true
});