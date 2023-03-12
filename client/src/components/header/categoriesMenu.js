import React, { useState, useEffect } from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignsByCat } from "../../store/actions/campaignActions";
import { getCampaignsBySubCat } from "../../store/actions/campaignActions";

import "./style.css";

let subcategories = [
  { title: " Face & Skin Care" },
  { title: "Message" },
  { title: "Salons" },
  { title: "Cosmetic Procedures" },
  { title: "Hair Removal" },
  { title: "Brows & Lashes" },
  { title: "Hair & Styling" },
  { title: "Spas" },
  { title: "Nail Salons" },
  { title: "Makeup" },
  { title: "Blowouts & Styling" },
  { title: "Tanning" },
];

const CategoriesMenu = ({ showCategories, divRef }) => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns);
  const category = useSelector((state) => state.categoryReducer);
  console.log("type", category.data);
  const subcategory = useSelector((state) => state.subCategoryReducer);
  console.log("subtype", subcategory.data);
  const state = useSelector((state) => state);
  console.log("state", state);
  const [activeCategory, setactiveCategory] = useState(
    category && category.data[0]
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [checked, setChecked] = React.useState([0]);

  function handleClose() {
    setAnchorEl(null);
  }

  useEffect(() => {
    setAnchorEl(divRef.current);
  }, [divRef]);

  const handleCatagoriesClick = (item) => {
    setSelectedCategory(item.name);
    setactiveCategory(item);

    filterCategoryresults(item.name);
  };

  const handleSubCatagoriesClick = (item) => {
    setSelectedCategory(item.name);
    setactiveCategory(item);

    filterCategoryresultsBySubCat(item.name);
  };

  // function to show campaigns based on the selected category
  const filterCategoryresults = (item) => {
    dispatch(getCampaignsByCat(item));
  };

  // function to show campaigns based on the selected Sub-Category
  const filterCategoryresultsBySubCat = (item) => {
    dispatch(getCampaignsBySubCat(item));
  };

  return (
    <>
      {selectedCategory ? (
        <div style={{ position: "absolute", top: "21%", left: "7%" }}>
          <h2>{selectedCategory}</h2>
          <div style={{ marginBottom: "10px" }}>
            <Typography mb={4} color="gray" variant="span" component="span">
              {state.campaigns.data.length} results
            </Typography>
          </div>
        </div>
      ) : (
        <Popper
          id={"show-categories"}
          open={showCategories}
          onClose={handleClose}
          anchorEl={anchorEl}
          placement={"bottom-start"}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box
                sx={{
                  border: "1px solid #d8d8d8",
                  display: "flex",
                  borderRadius: "4px",
                  flexDirection: "row",
                  marginTop: 0,
                  marginRight: 75,
                  p: 1,
                  bgcolor: "background.paper",
                }}
              >
                <div>
                  {category.data && category.data.map((item, id) => (
                    <div
                      onClick={() => handleCatagoriesClick(item)}
                      className="link-item"
                      key={id}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>

                <div className="sub-menu">
                  {subcategory.data && subcategory.data.map((item, id) => (
                    <div
                      onClick={() => handleSubCatagoriesClick(item)}
                      className="link-item"
                      key={id}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </Box>
            </Fade>
          )}
        </Popper>
      )}
    </>
  );
};

export default CategoriesMenu;
