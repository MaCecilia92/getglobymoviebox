import { type FC } from 'react';
import { Icon, Box, Text, Flex, Spacer } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { Comment } from '../Rating/RatingComponent';
import { format } from 'date-fns';

interface CommentsComponentProps {
  comments: Comment[] | null;
}

export const CommentsComponent: FC<CommentsComponentProps> = ({ comments }) => {
  return (
    <>
      {comments &&
        comments.map((comment) => (
          <Box key={comment.id} display='flex' flexDirection='column' mb={4}>
            <Flex>
              <Box display='flex' justifyContent='star' alignItems='center'>
                <Text pr={2} as='b'>
                  {comment.rating}.0
                </Text>
                {[...Array(comment.rating)].map((_, index) => (
                  <Icon
                    as={AiFillStar}
                    key={index}
                    boxSize={3}
                    color='yellow.400'
                    mr={1}
                  />
                ))}
              </Box>
              <Spacer />
              <Box>
                <Text ml={2} fontSize='sm'>
                  {format(new Date(comment.id), 'dd/MM/yyyy')}
                </Text>
              </Box>
            </Flex>
            <Text mt={5}>{comment.comment}</Text>
          </Box>
        ))}
    </>
  );
};
