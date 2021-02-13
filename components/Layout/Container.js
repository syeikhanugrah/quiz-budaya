import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="container mx-auto p-4">{ children }</div>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
