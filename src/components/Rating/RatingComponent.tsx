import { type FC, useState, useEffect } from 'react';
import { Textarea, Button, Box } from '@chakra-ui/react';
import { StarComponent } from './StartComponent';
import { CommentsComponent } from '../Comments/CommentsComponent';
import { useLocalStorage } from '../../customhooks';
import { orderComments } from '../../utils';

// Define interface for comment
export interface Comment {
  id: string;
  rating: number;
  comment: string;
}

// Define interface for favorite
// interface Favorite {
//   id: string;
//   rating: number;
//   comment: string;
// }

export const RatingComponent: FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [sortedItems, setSortedItems] = useState<Comment[] | null>(null);

  const [data, setData] = useLocalStorage<Comment>({
    comments: [],
    // 'favorites': [],
  });

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: Comment = {
      id: new Date().toISOString(),
      rating,
      comment,
    };
    setData('comments', data['comments'].concat(newComment));
    setRating(0);
    setComment('');
  };

  // const addToFavorites = () => {
  //   const newFavorite: Favorite = { id: new Date().toISOString(), rating, comment };
  //   setData('favorites', data['favorites'].concat(newFavorite));
  // };

  useEffect(() => {
    const localStorageItems: string | null = localStorage.getItem('comments');
    if (localStorageItems) {
      const dataFromStorage: Comment[] = JSON.parse(localStorageItems);
      const orderData: Comment[] = dataFromStorage.sort(orderComments);
      setSortedItems(orderData);
    }
  }, [data]);

  return (
    <Box>
      {[...Array(5)].map((_, index) => (
        <StarComponent
          key={index}
          filled={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Leave a comment...'
        rows={4}
        cols={50}
      ></Textarea>
      <Box display='flex' justifyContent='end' mt={2}>
        <Button colorScheme='teal' size='md' onClick={handleSubmit}>
          Post
        </Button>
        {/* <Button colorScheme='blue' size='md' onClick={addToFavorites}>Add to Favorites</Button> */}
      </Box>
      <Box mt={10}>
        <CommentsComponent comments={sortedItems} />
      </Box>
    </Box>
  );
};
