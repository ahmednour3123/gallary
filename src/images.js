import { Box, ImageList, useMediaQuery } from '@mui/material';
import React from 'react';

const Images = ({ data, onClick }) => {
  const HandleClick = (index) => {
    onClick(index);
  };

  // Define breakpoints for responsive design
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');
  const isDesktop = useMediaQuery('(min-width:960px)');

  // Set the number of columns and gap based on screen size
  const getCols = () => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    if (isDesktop) return 6;
  };

  const getGap = () => {
    if (isMobile) return 4;
    if (isTablet) return 6;
    return 8;
  };

  return (
    <Box className="images-container">
      <ImageList variant="masonry" cols={getCols()} gap={getGap()}>
        {data.map((slide, index) => (
          <Box
            key={index}
            onClick={() => HandleClick(index)}
            className="image"
          >
            <img
              srcSet={`${slide.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${slide.src}?w=248&fit=crop&auto=format`}
              alt={slide.description}
              loading="lazy"
            />
          </Box>
        ))}
      </ImageList>
    </Box>
  );
};

export default Images;
