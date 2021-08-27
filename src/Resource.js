import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './resouce.css';
import { Link, Route } from 'react-router-dom';
import ResourceId from './ResourceId';
const Resource = ({ match }) => {
  const [apiData, setApiData] = useState([]);
  const [show, setShow] = useState(false);
  const [showData, setData] = useState(false);
  const currentUrl = window.location.href;
  useEffect(() => {
    const callApi = async () => {
      const res = await axios.get('https://reqres.in/api/unknown');
      setApiData(res.data.data);
    };
    callApi();
    currentUrl === 'https://react-f8mkjw.stackblitz.io/resources' &&
      setShow(true);
  }, []);
  return (
    <>
      {show ? (
        <div className="main__div">
        {apiData.map((item, idx) => {
          return (
            <Route path={match.path} key={`${idx}${item.name}`}>
              <Link to={`${match.url}/${item.id}`}>
                <div
                  className="main__items"
                  style={{ backgroundColor: `${item.color}` }}
                >
                  <h2> {item.name} </h2>
                  <h2>{item.year} </h2>
                  {currentUrl[currentUrl.length - 1] == item.id && (
                    <span>
                      <span className="pantone_value">Pantone Value </span>
                      <h2>{item.pantone_value} </h2>
                    </span>
                  )}
                </div>
              </Link>
            </Route>
          );
        })}
    </div>

      ) : (
        <>
          <Route path={`${match.path}/:id`} component={ResourceId} />
        </>
      )}
    </>
  );
};

export default Resource;
