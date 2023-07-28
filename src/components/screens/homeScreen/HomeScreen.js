import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container } from "react-bootstrap";

import Video from "../../video/Video";
import CategoriesBar from "../../categoriesBar/CategoriesBar";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../skeletons/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={<div className="spinner-border text-danger d-block mx-auto" />}
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4} key={video.id}>
                <Video video={video} />
              </Col>
            ))
          : [
              ...new Array(20).map(() => (
                <Col lg={3} md={4}>
                  <SkeletonVideo />
                </Col>
              )),
            ]}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
