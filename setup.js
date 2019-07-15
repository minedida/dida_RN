
import Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
// import fetch from "jest-fetch-mock/types"

// global.fetch = require("jest-fetch-mock/types");
// global.fetch = fetch.types;
Enzyme.configure({ adapter: new Adapter() });
