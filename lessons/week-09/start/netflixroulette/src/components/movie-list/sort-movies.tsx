import React, { FC } from 'react';
import { Flex, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react';
import { MovieSortType, SORT } from '../../models';
import { UpDownIcon } from '@chakra-ui/icons';

export interface SortMoviesProps {
  sortType: MovieSortType;
  onChange: (sortType: MovieSortType) => void;
}

export const SortMovies: FC<SortMoviesProps> = ({ sortType, onChange }) => {
  const menuItemStyle = {
    backgroundColor: 'background.dark',
    _focus: {
      backgroundColor: 'background.default',
    },
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex alignItems="center" gap="8" marginBottom="6">
      <Text
        as="label"
        sx={{
          fontSize: "md",
          letterSpacing: "0.8888889px",
          textTransform: "uppercase",
          opacity: 0.6,
        }}
      >
        Sort by
      </Text>
      <Menu onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
        <MenuButton>
          {SORT[sortType]}
          <UpDownIcon color="text.highlighted" marginLeft={3} />
        </MenuButton>
        <MenuList bgColor="background.dark">
          <MenuItem onClick={() => onChange(MovieSortType.RELEASE_DATE_DESC)} sx={menuItemStyle}>Release date</MenuItem>
          <MenuItem onClick={() => onChange(MovieSortType.TITLE_ASC)} sx={menuItemStyle}>Title</MenuItem>
          <MenuItem onClick={() => onChange(MovieSortType.RATING_DESC)} sx={menuItemStyle}>Best first</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
