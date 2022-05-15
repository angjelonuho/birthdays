import { cleanup, render } from '@testing-library/react';
import Container from './components/common/container';
import Header from './components/common/headers';
import PeopleDetails from './pages/personDetails'
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import formatDate from './utils/formatDate';
import ErrorPage from './pages/errorPage';
import PeopleListComponent from './pages/peopleList';
import axiosInstance from "./helpers/axiosHelper";

afterEach(cleanup);
test('should render container component ', () => {
  const { getByTestId } = render(<Container>{}</Container>);
  expect(getByTestId('c1')).toBeInTheDocument();
});
test('should render container component with style', () => {
  const Styles = {Text: {color: "red"}}
  const { getByTestId } = render(<Container style={Styles.Text}>{ }</Container>);
  expect(getByTestId('c1')).toHaveStyle(`color: red`)
});
test('should render container component with children', () => {
  const Styles = {Text: {color: "red"}}
  const { getByTestId } = render(<Container style={Styles.Text}>{<p></p>}</Container>);
  expect(getByTestId('c1')).toContainHTML('<p></p>')
});

test('should render container component ', () => {
  const { getByTestId } = render(<Container>{}</Container>);
  expect(getByTestId('c1')).toBeInTheDocument();
});
test('should render header component with text', () => {
  const { getByTestId } = render(<Header text={'test button'} />);
  expect(getByTestId('h1')).toHaveTextContent('test button')
});

test('route rendering', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  const history2 = createMemoryHistory({ initialEntries: ['/Details'] });
  const history3 = createMemoryHistory({ initialEntries: ['/Error'] });
  render(
    <Router>
      <Routes>
        <Route index element={<PeopleListComponent />} />
        <Route path="/Details" element={<PeopleDetails />} />
        <Route path="/Error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
  expect(history.location.pathname).toBe('/');
  expect(history2.location.pathname).toBe('/Details');
  expect(history3.location.pathname).toBe('/Error');
});

test('should formate date to dd/mm/yyy', () => {
  const date = new Date('2022-05-15T18:47:48.123Z')
  expect(formatDate(date)).toEqual("15/05/2022")
});


test('reject fetch with an error', async () => {
  const res = await  axiosInstance.get('').catch(e => { return e.code });
  expect(res).toEqual('ERR_NETWORK');
});

test('resolve fetch', async () => {
  const workingUrl = "https://randomuser.me/api/?results=1000&seed=chalkboard&inc=name,dob"
  const res = await  axiosInstance.get(workingUrl).catch(e => { return e.code });
  expect(res.status).toEqual(200);
});