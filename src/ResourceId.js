import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './resourceid.css';
const ResourceId = () => {
  const [singleItem, setSingleItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const callApi = async () => {
      const res = await axios.get(`https://reqres.in/api/unknown/${id}`);
      setSingleItem(res?.data?.data);
    };
    callApi();
  }, []);
  return (
    singleItem && (
      <div className="main__div1">
        <div
          className="id__div"
          style={{ backgroundColor: `${singleItem.color}` }}
        >
          <h2>{singleItem.name}</h2>
          <h2>{singleItem.year}</h2>
          <span>
            <span className="pantone_value"> Pantone Value</span>
            <h2>{singleItem.pantone_value} </h2>
          </span>
        </div>
       
      </div>
    )
  );
};

export default ResourceId;
