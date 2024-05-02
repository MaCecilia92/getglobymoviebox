/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../state'; // Asegúrate de importar el tipo adecuado para RootState
import { SearchComponent } from './SearchComponent';
import { setDataRequest } from '../../state/Movies/reducer';
import { selectSearchResults } from '../../state/Movies/selectors'; // Asegúrate de importar el selector adecuado

const mapStateToProps = (state: RootState) => ({
  searchResults: selectSearchResults(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  SearchByTerm: (param: any) => dispatch(setDataRequest(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
