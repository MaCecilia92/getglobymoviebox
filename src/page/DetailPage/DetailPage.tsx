import { FC } from 'react';
import { DetailComponent, RatingComponent } from '../../components';
import { DetailComponentProps } from '../../components';

interface ExtendedDetailComponentProps extends DetailComponentProps {
  imdbID?: string;
}

const DetailPage: FC<ExtendedDetailComponentProps> = ({
  getMovieById,
  movieByIdResult,
}) => {
  const imdbID = movieByIdResult ? movieByIdResult.imdbID : '';
  return (
    <>
      <DetailComponent
        getMovieById={getMovieById}
        movieByIdResult={movieByIdResult}
      />
      <RatingComponent movieId={imdbID} />
    </>
  );
};

export default DetailPage;
