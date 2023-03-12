import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/actions/userActions";
import "./style.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiNotification2Line, RiLock2Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import CategoriesMenu from "./categoriesMenu";
import ActionCard from "../Card/Card";
import Footer from "../Footer/footer";
import { Col } from "reactstrap";
import Pagination from "../Pagination/Pagination";
import SignInModal from "./SignInModal";
import { signOut } from "../../store/actions/authActions";
import {
  getCampaigns,
  getCampaignsByPrice,
} from "../../store/actions/campaignActions";
import { getCategories } from "../../store/actions/categoryActions";
import { getSubCategories } from "../../store/actions/subCategoryActions";
import { getAllMerchants } from "../../store/actions/merchantActions";
import {
  Typography,
  List,
  FormControlLabel,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import DrawerComponent from "./responsiveHeader";
import { getAllRecentViewedCampaigns } from "../../store/actions/recentViewedActions";
import { getAllFavoriteCampaigns } from "../../store/actions/favoritesActions";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setshowCategories] = useState(false);
  const [showAuth, setshowAuth] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueLoc, setSearchValueLoc] = useState("");
  const [tableData, setTableData] = useState([]);
  const [LocationTableData, setLocationTableData] = useState([]);
  const [checked, setChecked] = React.useState([]);
  const [checkState, setCheckState] = useState(false);
  const [value, setValue] = React.useState("0-10000");
  // const [min,setMin]=useState('')
  // const [max,setMax]=useState('')
  // const [handleCheck, setHandleCheck] = useState({});

  const divRef = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);
  const user = useSelector((state) => state.auth);
  // console.log("user data", user);
  const campaigns = useSelector((state) => state.campaigns);
  console.log("camps", campaigns);
  const categories = useSelector((state) => state.categoryReducer);
  const merchants = useSelector((state) => state.merchantReducer);

  useEffect(() => {
    // console.log("run");
    dispatch(getCampaigns());
    dispatch(getCategories());
    dispatch(getSubCategories());
    dispatch(getAllMerchants());
    dispatch(getAllRecentViewedCampaigns(state.auth._id));
    dispatch(getAllFavoriteCampaigns(state.auth._id));
  }, []);

  let PageSize = 12;

  // let price = [
  //   { min: "0.0", max: "60.0" },
  //   { min: "60.0", max: "110.0" },
  //   { min: "110.0", max: "160.0" },
  //   { min: "160.0", max: "275.0" },
  // ];

  const price = ["0-6000", "6000-11000", "11000-160000", "160000-250000"];
  let distance = [
    "Any Distance",
    "Within 1.0 mi (20+)",
    "Within 5.0 mi (120+)",
    "Within 10.0 mi (180+)",
    "Within 20.0 mi (290+)",
  ];

  let rating = ["All", "**** & Up(440+)", "**** & Up(460+)", "**** & Up(480+)"];
  // useMemo(() => {
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  // return
  // const currentTableData = campaigns.data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleLogOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const handleCatagoriesClick = () => {
    setshowCategories(!showCategories);
  };

  const handleSignIn = () => {
    setshowAuth(!showAuth);
    setShowSignInModal(!showSignInModal);
    setAnchorEl(divRef.current);
  };

  const filterListForOffer = (e) => {
    setSearchValue(e.target.value);
    filterResults();
  };

  const filterListForLocation = (e) => {
    setSearchValueLoc(e.target.value);
    console.log(searchValueLoc);
    filterResultsLocation();
  };

  const filterResultsLocation = () => {
    const filteredLoc = merchants.data.filter((product) =>
      product.location.find((i) =>
        i.location_city.toLowerCase().includes(searchValueLoc)
      )
    );
    // console.log("location resss", filteredLoc);

    const searchResLocation = getDifference(campaigns, filteredLoc); // we have to find the campaigns having the businessname of above merchnats

    console.log("dd", searchResLocation);
    setLocationTableData(searchResLocation);
    console.log("LocationData.......", LocationTableData);

    function getDifference(campaigns, filteredLoc) {
      //   console.log("ty",filteredLoc,campaigns.data)
      return campaigns.data.filter((object1) => {
        //     // console.log("b",object1)
        //     let objArray=[];
        return filteredLoc.some((object2) => {
          //       console.log("ff",object2)
          //       if ( object1.merchant_businessName === object2.businessName){
          // objArray.push(object2)
          //       }
          //       console.log("obj Array....",objArray)
          return object1.merchant_businessName == object2.businessName;
        });
      });
      //   console.log(locationData)
      // console.log("ty",filteredLoc,campaigns.data)
      // // common entities match businessName
      // let objArray=[];
      // for (const iterator of campaigns.data) {
      //   console.log("1",iterator.merchant_businessName)
      //   for (const iterator2 of filteredLoc) {
      //     // console.log("2",iterator2.businessName)
      //     if ( iterator2.businessName === iterator.merchant_businessName){
      //       objArray.push(iterator)
      //            }

      //   }
    }
    // console.log("obj Array....",objArray)
    // }
  };
  //  console.log(merchants.data.map((product)=>product.location.map((i)=>console.log("heyy",i))))

  const filterResults = () => {
    const filtered = campaigns.data.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );

    setTableData(filtered);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  if (value) {
    console.log("checked", value);
    let arrayOfPriceFilter = value.split("-");
    console.log(arrayOfPriceFilter);

    var minPrice = arrayOfPriceFilter[0];
    var maxPrice = arrayOfPriceFilter[1];

    // dispatch(getCampaignsByPrice(minPrice, maxPrice));

    console.log("checkinggggg", minPrice, maxPrice);
  }

  // var uniqueArray = Array.from(new Set(arrayOfPriceFilter));
  // console.log(uniqueArray)
  // const arrOfNum = uniqueArray.map(str => {
  //   return Number(str);
  // });
  // console.log(arrOfNum)
  // Filter the campaigns based on checked price array
  // if(uniqueArray){
  //   var priceFilterResults = campaigns.data.filter((e) =>
  //   e.offer.find((i) =>
  // console.log("priceeeee",i.offer_price)))
  //  i.offer_price <= uniqueArray[i]));

  // console.log(priceFilterResults)
  // }

  const style = { color: "#006E2E", fontSize: "24px" };

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
              <span>
                {/* <Link
          className="top-nav-link" to="/signInModal">
            SignIn
          </Link> */}
              </span>
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
            <div>
              <div>
                <button
                  className="header-btn"
                  onClick={handleCatagoriesClick}
                  ref={divRef}
                >
                  Categories{" "}
                  {showCategories ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {showCategories && (
                  <CategoriesMenu
                    showCategories={showCategories}
                    divRef={divRef}
                  ></CategoriesMenu>
                )}
              </div>
            </div>

            <div className="header-search">
              <span>
                <AiOutlineSearch />{" "}
                <input
                  type="text"
                  id="search"
                  className="search-input offer-search"
                  placeholder="Search campaign"
                  onChange={filterListForOffer}
                />
              </span>
              <span className="border-right">
                <IoLocationSharp />{" "}
                <input
                  type="text"
                  className="search-input"
                  id="search_location"
                  placeholder="Search Location"
                  onChange={filterListForLocation}
                />
              </span>
            </div>
            <button className="search-btn">
              {" "}
              <AiOutlineSearch size={22} />
            </button>
            <button className="notification-icon">
              {" "}
              <RiNotification2Line size={22} />
            </button>

            {user._id == null && (
              <span>
                <button
                  className="header-btn"
                  onClick={handleSignIn}
                  ref={divRef}
                >
                  {" "}
                  Sign In {showAuth ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>{" "}
                {showAuth && <signIn showAuth={showAuth}></signIn>}
                {showSignInModal && (
                  <SignInModal
                    showSignInModal={showSignInModal}
                    divRef={divRef}
                  ></SignInModal>
                )}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="header-search-mobile">
        <span>
          <AiOutlineSearch />{" "}
          <form>
            <input
              type="text"
              id="search"
              className="search-input offer-search"
              placeholder="Seach Campaign"
              onChange={filterListForOffer}
            />
          </form>
        </span>
        <span className="border-right">
          <IoLocationSharp />{" "}
          <input
            className="search-input"
            type="text"
            id="search_location"
            placeholder="Search Location"
            onChange={filterListForLocation}
          />
        </span>
      </div>

      {/* //Green Bar of Sign In */}
      <div className="discount-bar d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center">
          <RiLock2Fill style={style} />
          <span className="discount-text">
            <p>Sign in to save 15% or more!</p>
          </span>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-end">
          <div>
            <button className="book-online-btn">Book Online</button>
          </div>
          <div>
            <button className="book-online-btn">
              Sort By <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* filters to be shown when user selects a category */}
          {showCategories ? (
            <>
              <div style={{ display: "flex" }}>
                <Col>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ marginTop: "60px" }}>
                      <Typography variant="span" component="span">
                        Price
                      </Typography>

                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 960,
                          bgcolor: "background.paper",
                        }}
                      >
                        {/* // <ListItem
                            //   key={value}
                            //   secondaryAction={
                            //     <IconButton edge="end" aria-label="comments">
                            //       {/* <CommentIcon /> */}
                        {/* //     </IconButton>
                            //   }
                            //   disablePadding
                            // >
                            //   <ListItemButton */}
                        {/* //     role={undefined}
                            //     // onClick={handleToggle(value)}
                            //     dense
                            //   >
                            //     <ListItemIcon>
                            //       <Checkbox */}
                        {/* //         edge="start"
                            //         checked={value}
                            //         tabIndex={-1}
                            //         disableRipple
                            //         onChange={handleCheck}
                            //         // inputProps={{ 'aria-labelledby': labelId }}
                            //       />

                            //     </ListItemIcon>
                            //     <ListItemText */}
                        {/* //       primary={`$ ${value.min} - $ ${value.max}`}
                            //     />
                            //   </ListItemButton>
                            // </ListItem> */}
                        <div>
                          <FormControl>
                            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                            <RadioGroup

                            style={{width:'150%'}}
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={value}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value="0-10000"
                                control={<Radio />}
                                label="0-10000"
                              />
                              <FormControlLabel
                                value="10000-20000"
                                control={<Radio />}
                                label="10000-20000"
                              />
                              <FormControlLabel
                                value="20000-30000"
                                control={<Radio />}
                                label="20000-30000"
                              />
                              <FormControlLabel
                                value="30000-40000"
                                control={<Radio />}
                                label="30000-40000"
                              />
                            </RadioGroup>
                          </FormControl>
                        </div>
                      </List>
                    </div>
                    <div>
                      {/* <Typography mt={4} ml={2} variant="span" component="span">
                        Distance
                      </Typography>

                      <List
                        sx={{
                          width: "120%",
                          maxWidth: 960,
                          bgcolor: "background.paper",
                        }}
                      >
                        {distance.map((value) => { */}
                      {/* {console.log(value.min)}
                             const labelId = `checkbox-list-label-${value.min}`;

                          return (
                            <ListItem
                              key={value}
                              secondaryAction={
                                <IconButton
                                  edge="end"
                                  aria-label="comments"
                                ></IconButton>
                              }
                              disablePadding
                            >
                              <ListItemButton
                                role={undefined}
                                // onClick={handleToggle(value)}
                                dense
                              >
                                <ListItemIcon>
                                  <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple */}
                      {/* inputProps={{ 'aria-labelledby': labelId }}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={`${value} `} />
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                      </List> */}
                    </div>
                    <div>
                      {/* <Typography mt={4} ml={2} variant="span" component="span">
                        Rating
                      </Typography>
                      <List
                        sx={{
                          width: "120%",
                          maxWidth: 960,
                          bgcolor: "background.paper",
                        }}
                      > */}
                      {/* {rating.map((value) => {
                          //  {console.log(value.min)}
                          //   const labelId = `checkbox-list-label-${value.min}`;

                          return (
                            <ListItem
                              key={value}
                              secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                 
                                </IconButton>
                              }
                              disablePadding
                            >
                              <ListItemButton
                                role={undefined}
                                // onClick={handleToggle(value)}
                                dense
                              >
                                <ListItemIcon>
                                  <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    // inputProps={{ 'aria-labelledby': labelId }}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={`${value} `} />
                              </ListItemButton>
                            </ListItem>
                          );
                        })} */}
                      {/* </List> */}
                    </div>
                  </div>
                </Col>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginLeft: "65px",
                  }}
                >
                  {" "}
                  {/* {!searchValue 
 ? !searchValueLoc :
 campaigns.data &&
 campaigns.data.map((campaign) => (
   <div style={{ display: "flex", flexWrap: "wrap" }}>
     <div className="col-lg-4 d-flex justify-content-space-between card-main-wrapper">
       <ActionCard campaign={campaign} />
     </div>
   </div>
 ))
 ?  searchValueLoc
 : LocationTableData.map((campaign) => (
     <div style={{ display: "flex", flexWrap: "wrap" }}>
       <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
         <ActionCard campaign={campaign} />
       </div>
     </div>
   ))
   ? searchValue : tableData.map((campaign) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
        <ActionCard campaign={campaign} />
      </div>
    </div>
  ))
} */}
                  {!searchValue
                    ? campaigns.data &&
                      campaigns.data.map((campaign) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          <div className="col-lg-4 d-flex justify-content-space-between card-main-wrapper">
                            <ActionCard campaign={campaign} />
                          </div>
                        </div>
                      ))
                    : searchValueLoc
                    ? LocationTableData.map((campaign) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
                            <ActionCard campaign={campaign} />
                          </div>
                        </div>
                      ))
                    : tableData.map((campaign) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
                            <ActionCard campaign={campaign} />
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {/* 
{!searchValue && !searchValueLoc 
 ? 
//  !searchValueLoc 
//  :
 campaigns.data &&
 campaigns.data.map((campaign) => (
   <div style={{ display: "flex", flexWrap: "wrap" }}>
     <div className="col-lg-4 d-flex justify-content-space-between card-main-wrapper">
       <ActionCard campaign={campaign} />
     </div>
   </div>
 ))
 :  searchValueLoc
  LocationTableData.map((campaign) => (
     <div style={{ display: "flex", flexWrap: "wrap" }}>
       <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
         <ActionCard campaign={campaign} />
       </div>
     </div>
   ))
   ? searchValue : tableData.map((campaign) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
        <ActionCard campaign={campaign} />
      </div>
    </div>
  ))
} */}

              {!searchValue
                ? campaigns.data &&
                  campaigns.data.map((campaign) => (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div className="div-lg-3 d-flex justify-content-center card-main-wrapper">
                        <ActionCard campaign={campaign} />
                      </div>
                    </div>
                  ))
                : searchValueLoc
                ? LocationTableData.map((campaign) => (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
                        <ActionCard campaign={campaign} />
                      </div>
                    </div>
                  ))
                : tableData.map((campaign) => (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
                        <ActionCard campaign={campaign} />
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={campaigns.data ? campaigns.data.length : 0}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <div className="footer-index">
        <Footer />
      </div>
    </>
  );
};
