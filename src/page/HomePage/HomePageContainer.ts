/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../state';
import HomePage from './HomePage';
import { setDataRequest } from '../../state/Movies/reducer';
import { selectSearchResults, selectError } from '../../state/Movies/selectors';

const mapStateToProps = (state: RootState) => ({
  searchResults: selectSearchResults(state),
  error: selectError(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  SearchByTerm: (param: any) => dispatch(setDataRequest(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
