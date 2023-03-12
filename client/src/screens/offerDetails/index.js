import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "../../components/header/style.css";
import { FcLike } from "react-icons/fc";
import Footer from "../../components/Footer/footer";
import { useDispatch, useSelector } from "react-redux";
import {
  getCampaigns,
  addRecentViewedCampaign,
  likeCampaign,
} from "../../store/actions/campaignActions";
import { getUserById } from "../../store/actions/userActions";
import { getAllRecentViewedCampaigns } from "../../store/actions/recentViewedActions";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { imgURL } from "../../store/redux/config";
import { signOut } from "../../store/actions/authActions";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Grid,
  CardActionArea,
} from "@mui/material";
import DrawerComponent from "../../components/header/responsiveHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getAllFavoriteCampaigns } from "../../store/actions/favoritesActions";

const OfferDetails = () => {
  // Extract the selected campaign id from url
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);

  const [showAuth, setshowAuth] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const campaigns = useSelector((state) => state.campaigns.data);
  const userData = useSelector((state) => state.userReducer.data);
  const recentlyviewed = useSelector((state) => state.recentViewedReducer.data);
  console.log(recentlyviewed);
  const favorites = useSelector((state) => state.recentViewedReducer.data);
  console.log(favorites);
  const state = useSelector((state) => state);
  console.log("offers", campaigns);
  console.log(userData);
  const user = useSelector((state) => state.auth);
  // console.log("user data", user);
  useEffect(() => {
    dispatch(getCampaigns());
    dispatch(getUserById(state.auth._id));
    if (state.auth._id) {
      console.log(id, state.auth.email);
      dispatch(addRecentViewedCampaign(id, state.auth.email));
      // dispatch(getAllRecentViewedCampaigns(state.auth._id));
      dispatch(getAllFavoriteCampaigns(state.auth._id));
    }
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Getting the selected campaign from the id passed in the url but filtering the id in the url with the id in campaigns array
  if (campaigns) {
    var found = campaigns.find(function (item) {
      return item._id === id;
    });
    console.log("found", found);
  }

  if (userData) {
    var favorites1 = userData.likes.map((i) => i.campaigns);
    console.log("ressss", favorites);

    var CampaignlikedByUser = favorites1.find((i) => i === id);
    console.log("my resssulttt", CampaignlikedByUser);
    // Finding the campaigns list that are liked by user
    // if (favorites) {
    //   var likeequals = campaigns.filter((e, i) => e._id === favorites[i]);
    //   console.log("equals", likeequals);

    // }
  }

  const likeCampaignById = (id) => {
    console.log("the id", id);
    dispatch(likeCampaign(id, user.email));
    console.log(liked);
    setLiked(!liked);
    console.log(liked);
  };

  return (
    <>
      {isMobile ? (
        <DrawerComponent />
      ) : (
        <div>
          <div className="top-header">
            {user._id !== null ? (
              <span>
                <Link
                  onClick={() => handleLogOut()}
                  className="top-nav-link"
                  to="/"
                >
                  Logout
                </Link>
              </span>
            ) : (
              <span></span>
            )}
            {user._id == null && (
              <span>
                <Link className="top-nav-link" to="/signup">
                  Sign up
                </Link>
              </span>
            )}

            <span>
              <Link className="top-nav-link" to="/">
                <AiOutlineHeart /> My Wishlist{" "}
              </Link>
            </span>
            {console.log("my ussseerrr", userData)}
            {user._id !== null && (
              <span>
                <Link className="top-nav-link" to="/profile">
                  Hello {`${state.auth.first_name}`}
                </Link>{" "}
              </span>
            )}
          </div>
          <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="brand-name">Mooli</span>
            </Link>
          </div>
        </div>
      )}

      <div>
        <div className="offer-detail-heading" style={{ margin: "30px 0" }}>
          <h3>
            {found &&
              found.title.charAt(0).toUpperCase() + found.title.slice(1)}
          </h3>
        </div>

        <div></div>
      </div>
      <div className="row offer-details-image">
        <div className="col-lg-6 d-flex" style={{ flexDirection: "column" }}>
          {/* <div> */}

          <div
            style={{
              margin: "",
              width: "700px",
              height: "500px",
            }}
          >
            <Slider {...settings}>
              {found &&
                found.image.map((i, index) => (
                  //  {image.map((i, index) => (
                  <div key={index}>
                    {console.log("sdad", i)}
                    <img
                      alt="name"
                      src={imgURL + i}
                      style={{ width: 700, height: 480, borderRadius: "5px" }}
                    />
                  </div>
                ))}
            </Slider>
          </div>

          <div style={{ display: "flex" }}>
            {found &&
              found.image.map((i, index) => (
                <img
                  alt="name"
                  src={imgURL + i}
                  style={{ display: "flex", width: 140, height: 80 }}
                />
              ))}
          </div>
        </div>

        <div className="col-lg-6 ml-2">
          {found &&
            found.offer.map((item) => {
              return (
                <Box
                  style={{
                    margin: "60px 130px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Card
                        sx={{ minWidth: 350 }}
                        xs={12}
                        md={4}
                        style={{
                          marginRight: "2px",
                        }}
                      >
                        <CardActionArea>
                          <CardContent
                            style={{
                              // backgroundColor: "whitesmoke",
                              borderRadius: "4px",
                              marginRight: "24px",
                              height: "230px",
                            }}
                          >
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.primary"
                              gutterBottom
                            >
                              {item.offer_title}
                            </Typography>
                            <Typography
                              variant="h5"
                              component="div"
                            ></Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {parse(item.offer_description)}
                            </Typography>
                            <Typography variant="body2">
                              Price: $ {item.offer_price}
                              <br />
                              <div
                                className="card-off-percentage"
                                style={{ width: "40%" }}
                              >
                                <h6>Discount: {item.offer_discount}%</h6>
                              </div>
                              Discounted price: ${" "}
                              {item.offer_price -
                                item.offer_price * (item.offer_discount / 100)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
        </div>

        <div className="offer-detail-heading" style={{ margin: "-30px 0" }}>
          {user._id !== null &&
            (CampaignlikedByUser !== undefined || liked ? (
              <FcLike
                style={{ fontSize: "27px", marginBottom: "10px", color: "red" }}
              />
            ) : (
              <AiOutlineHeart
                style={{ fontSize: "27px", marginBottom: "10px", color: "red" }}
                onClick={() => likeCampaignById(found._id)}
              />
            ))}

          <div
            className="offer-details-discount"
            style={{
              margin: "0px 0px",
              width: "80%",
            }}
          >
            <h3>About This Deal</h3>
            <br />
            <p style={{ fontWeight: "300" }}>
              {found && parse(found.description)}
            </p>
          </div>
          <h5>Merchant: {found && found.merchant_businessName}</h5>
          <h6>Start Date: {found && found.start_date}</h6>
          <h6 style={{ marginBottom: "50px" }}>
            End Date: {found && found.end_date}
          </h6>
        </div>

        {user._id !== null && (
          <>
            <hr></hr>

            <br></br>
            <div className="col-lg-6 ml-2">
              <h5>YOUR FAVORITE CAMPAIGNS...</h5>
              <div className="favorites col-lg-6 ml-2">
                {favorites &&
                  favorites.map(
                    (item, index) =>
                      //  {
                      index < 10 && (
                        <Box
                          style={{
                            display: "flex",
                            margin: "40px 10px",
                          }}
                        >
                          <Grid container spacing={0}>
                            <Grid item xs={4}>
                              <Card sx={{ minWidth: 200 }} xs={6} md={4}>
                                <CardActionArea>
                                  <CardContent
                                    style={{
                                      // backgroundColor: "whitesmoke",
                                      borderRadius: "4px",
                                      marginRight: "20px",
                                      height: "210px",
                                    }}
                                  >
                                    <Typography
                                      sx={{ fontSize: 14 }}
                                      color="text.primary"
                                      gutterBottom
                                    >
                                      {item.title.substring(0, 49).trimEnd() +
                                        "..."}
                                    </Typography>
                                    <Typography
                                      variant="h5"
                                      component="div"
                                    ></Typography>
                                    <Typography
                                      sx={{ mb: 1.5 }}
                                      color="text.secondary"
                                      style={{
                                        textOverflow: "ellipsis !important",
                                      }}
                                    >
                                      {parse(
                                        item.description
                                          .substring(0, 50)
                                          .trimEnd() + "..."
                                      )}
                                    </Typography>
                                    <Typography variant="body2">
                                      Price: $ {item.end_date}
                                      <br />
                                      Merchant: {item.merchant_businessName}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                              </Card>
                            </Grid>
                          </Grid>
                        </Box>
                      )

                    // }
                  )}
              </div>
            </div>
          </>
        )}
        {user._id !== null && (
          <>
            <hr></hr>
            <br></br>

            <div>
              <h5>YOUR RECENTLY VIEWED CAMPAIGNS LIST...</h5>
              <div  className="recents col-lg-6 ml-2">
                {recentlyviewed &&
                  recentlyviewed.map(
                    (item, index) =>
                      // {
                      index < 10 && (
                        <Box
                          style={{
                            display: "flex",
                            margin: "40px 10px",
                          }}
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={4}>
                              <Card sx={{ minWidth: 200 }} xs={12} md={4}>
                                <CardActionArea>
                                  <CardContent
                                    style={{
                                      // backgroundColor: "whitesmoke",
                                      borderRadius: "4px",
                                      marginRight: "20px",
                                      height: "210px",
                                    }}
                                  >
                                    <Typography
                                      sx={{ fontSize: 14 }}
                                      color="text.primary"
                                      gutterBottom
                                    >
                                      {item.title.substring(0, 49).trimEnd() +
                                        "..."}
                                    </Typography>
                                    <Typography
                                      variant="h5"
                                      component="div"
                                    ></Typography>
                                    <Typography
                                      sx={{ mb: 1.5 }}
                                      color="text.secondary"
                                      style={{
                                        textOverflow: "ellipsis !important",
                                      }}
                                    >
                                      {parse(
                                        item.description
                                          .substring(0, 50)
                                          .trimEnd() + "..."
                                      )}
                                    </Typography>
                                    <Typography variant="body2">
                                      Price: $ {item.end_date}
                                      <br />
                                      Merchant: {item.merchant_businessName}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                              </Card>
                            </Grid>
                          </Grid>
                        </Box>
                      )
                    // }
                  )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="footer-index">
        <Footer />
      </div>
      {/* </div> */}
    </>
  );
};

export default OfferDetails;
