import React from 'react';
import { Box, Badge, Image, Tooltip } from '@chakra-ui/core';
import {formatDistance} from 'date-fns'

interface NewsCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  category: string;
  datetime: number;
  headline: string;
  source: string;
}

const NewsCard = (props: NewsCardProps) => {
  const date = formatDistance(
    new Date(props.datetime * 1000),
    new Date()
  )
  console.log(props)
  return (
    <Box maxW="200px" margin="10px" borderWidth="1px" rounded="lg" overflow="hidden" as="a" href={props.url}>
      <Image maxH="130px" margin="0 auto" src={props.imageUrl} alt={props.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">{props.category}</Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          fontSize="xs"
          lineHeight="tight"
          isTruncated
        >
          <Tooltip aria-label="headline-tooltip" label={props.headline} placement="auto-start">
            {props.headline}
          </Tooltip>
        </Box>
        <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            <p>{props.source}</p>
            <p>{date}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;