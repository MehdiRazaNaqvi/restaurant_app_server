import React,{useState,useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import {imgURL} from '../../store/redux/config'
import parse from "html-react-parser";
import AvatarImage from '../../assets/2.jpg'
import './style.css'

function ActionCard({ campaign }) {


// Clicking on any card will open the src >> screens >> OfferDetails >> index.js
// we are passing the campaign id to get the details of campaign on details page
  return (
    <Link to={`/campaign/${campaign._id}`} style={{ textDecoration: "none" }}>
      <Card 
      sx={{ maxWidth: 240, minWidth:240 }}
      
      >
        <CardActionArea>
          <CardMedia
          className="card1-image"
            component="img"
            height="181"
            
            image={imgURL + campaign.image ? imgURL + campaign.image[0] : AvatarImage}
            alt={campaign.title}
            
          />
          <CardContent
          style={{
            paddingBottom: "0%",
            maxHeight: "155px",
    
          }}
          >
            <div className="card-little-heading">
              <h5 style={{fontSize:'18px'}}>{campaign.merchant_businessName}</h5>
             
            </div>
            <div className="card-heading">
              <h6>{campaign.title}</h6>
            </div>
            {/* <div className="card-one-liner">
              <p>{parse(campaign.description)}</p>
            </div> */}

            <div className="d-flex">
              <div className="card-price">
                <h5>$ {campaign.offer.length>0 && campaign.offer[0].offer_price}.00</h5>
            
              </div>
              <div className="card-dicounted-price">
                <h4>{campaign.price}</h4>
              </div>
              <div className="card-off-percentage">
                <h6>{campaign.campaignStatus}</h6>
              </div>
            </div>
            <div className="card-category-wrapper">
              <h4>{campaign.catagory}</h4>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default ActionCard;
