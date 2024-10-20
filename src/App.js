import {Box} from "@mui/material";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';

import { slides } from "./data.js";
import "yet-another-react-lightbox/styles.css";
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Images from "./images.js";
import Navbar from "./navbar.js";

function App() {
  const [index, setIndex] = useState(-1);

  return (
    <Box>
    <Navbar/>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />
      <Lightbox
        open={index >= 0}
        slides={slides}
        index={index}
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        carousel={{
          direction: 'rtl',  
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'start',
        }}
        close={() => {
          setIndex(-1);
        }}
        styles={{
          container: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          slide: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeIn 1s ease-in-out',  
          },
        }}
      />
    </Box>
  );
}

export default App;
