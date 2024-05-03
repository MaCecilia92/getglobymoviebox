import { FC, useState, useEffect } from 'react';
import { Textarea, Button, Box, Text, Flex } from '@chakra-ui/react';
import { StarComponent } from './StartComponent';
import { CommentsComponent } from '../Comments/CommentsComponent';
import { useLocalStorage } from '../../customhooks';
import { orderComments } from '../../utils';

export interface Comment {
  id: string;
  rating: number;
  comment: string;
  idMovie: string;
}

interface RatingComponentProps {
  movieId: string;
}

export const RatingComponent: FC<RatingComponentProps> = ({ movieId }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [sortedItems, setSortedItems] = useState<Comment[] | null>(null);

  const [data, setData] = useLocalStorage<Comment>({
    comments: [],
  });

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: Comment = {
      id: new Date().toISOString(),
      idMovie: movieId,
      rating,
      comment,
    };
    setData('comments', data['comments'].concat(newComment));
    setRating(0);
    setComment('');
  };

  useEffect(() => {
    const localStorageItems: string | null = localStorage.getItem('comments');
    if (localStorageItems) {
      const dataFromStorage: Comment[] = JSON.parse(localStorageItems);
      const sortedComments: Comment[] = dataFromStorage
        .filter((comment) => comment.idMovie === movieId)
        .sort(orderComments);

      setSortedItems(sortedComments);
    }
  }, [data, movieId]);

  return (
    <Box>
      <Flex alignItems='center'>
        <Text as='b' fontSize='lg' color='brand.lightGrey'>
          Rate
        </Text>
        {[...Array(5)].map((_, index) => (
          <StarComponent
            key={index}
            filled={index < rating}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </Flex>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Leave a comment...'
        rows={4}
        cols={50}
        bg='gray.100'
      />
      <Box display='flex' justifyContent='end' mt={2}>
        <Button
          colorScheme='teal'
          size='md'
          onClick={handleSave}
          isDisabled={!comment || !rating}
        >
          Post
        </Button>
      </Box>
      <Box mt={10}>
        <CommentsComponent comments={sortedItems} />
      </Box>
    </Box>
  );
};
