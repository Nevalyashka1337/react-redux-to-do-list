import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from "chai";
import chaiJestSnapshot from "chai-jest-snapshot";
chai.use(chaiJestSnapshot);

Enzyme.configure({ 
	adapter: new Adapter(),
	disableLifecycleMethods: true
})