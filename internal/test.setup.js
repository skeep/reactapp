import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';  // https://reactjs.org/docs/javascript-environment-requirements.html

Enzyme.configure({ adapter: new Adapter() }); // https://github.com/airbnb/enzyme/blob/master/docs/installation/react-16.md
