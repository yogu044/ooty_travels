import { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import "../css/gallery.css";

export default function Gallery() {
  const [data, setData] = useState([]);

  

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery-header">
        <h2>Our Projects</h2>
        <p>The pictures of Customers</p>
      </div>

      
    </div>
  );
}
