import { type FC } from 'react';
import { DetailComponent } from '../../components';
import { RatingComponent } from '../../components';

const DetailPage: FC = () => {
  return (
    <>
      <DetailComponent />
      <RatingComponent />
    </>
  );
};

export default DetailPage;
