import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from "./tileData";
import TribesGalleryStyles from "../TribesGallery/TribesGalleryStyles";

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const TribesGallery = ({ urls = [] }) => {
  const classes = TribesGalleryStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {urls.map((url) => (
          <GridListTile key={url} cols={1}>
            <img src={url} alt="tribe" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default TribesGallery;
