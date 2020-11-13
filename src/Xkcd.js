import React, { useState, useEffect } from "react";
import { URLXkcdDaily, URLXkcdId } from "./settings";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "./style2.css";

const Xkcd = () => {
  const init = { ComicNum: "" };
  const [comic, setComic] = useState(init);

  const fetchDailyComic = () => {
    fetch(URLXkcdDaily)
      .then((res) => res.json())
      .then((data) => {
        setComic(data);
      });
  };
  const fetchComic = (comic) => {
    const URL = URLXkcdId + comic;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setComic(data);
      });
  };

  const fetchNewDaily = (evt) => {
    evt.preventDefault();
    fetchDailyComic();
  };
  useEffect(() => {
    fetchDailyComic();
  }, []);

  const getComic = (evt) => {
    evt.preventDefault();
    fetchComic(comic);
  };

  const onChange = (evt) => {
    const num = evt.target.value;
    setComic(num);
  };

  return (
    <div>
      <h2 className="inline">XKCD Comic</h2> #{comic.num}
      <p>
        {comic.day}/{comic.month}/ {comic.year}
        <br />
        <b>{comic.title}</b>
      </p>
      <img src={comic.img} alt={comic.alt} title={comic.alt} />;
      <Form onChange={onChange} className="mt-4" Label="">
        <Form.Label>please enter a number between 0 and 2384:</Form.Label>
        <Form.Control type="text" id="ComicNum" placeholder="" />

        <Button onClick={getComic} variant="primary" type="submit">
          Get Comic
        </Button>
        <Button onClick={fetchNewDaily} variant="primary" type="submit">
          Get Newest Comic
        </Button>
      </Form>
    </div>
  );
};

export default Xkcd;
