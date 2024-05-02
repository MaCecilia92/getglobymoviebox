/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../state';
import DetailPage from './DetailPage';
import { setDataByIdRequest } from '../../state/Movies/reducer';
import { selectMovieDetails } from '../../state/Movies/selectors';

const mapStateToProps = (state: RootState) => ({
  movieByIdResult: selectMovieDetails(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMovieById: (param: any) => dispatch(setDataByIdRequest(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
