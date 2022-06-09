import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>Im a page component</h2>
      {children}
    </div>
  );
}

Page.propType = {
  children: PropTypes.any,
};
