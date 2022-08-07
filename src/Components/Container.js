import { connect } from 'react-redux';
import Calculator from './Calculator';

const mapStateToProps = (state) => {
  console.log(state.r);
  return {
    result: state.r,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (e) => {
      dispatch({ type: 'Concat', payload: e.target.name });
    },
    handleResult: () => dispatch({ type: 'Eval' }),
    handleClear: () => dispatch({ type: 'Clear' }),
  };
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
