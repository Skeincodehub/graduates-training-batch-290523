import {
  Button,
  Card,
  Checkbox,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./TablePosts.css";

export function TablePosts(props) {
  console.log("===>", props.data);
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState([]);
  const parms = useParams();

  const localToken = localStorage.getItem("token");
  const localRefreshToken = localStorage.getItem("refresh_token");
  const config = {
    headers: {
      "x-access-token": localToken,
      "x-refresh-token": localRefreshToken,
    },
  };

  useEffect(() => {
    axios
      .get("https://demo.emeetify.com:81/pet/pets/", config)
      .then((response) => {
        console.log("data", response?.data?.data);
        setFetchedData(response?.data?.data);
      });
  }, []);
  const handleClick = (data) => {
    // const {data.pet_id}= parms
    console.log(data);

    navigate(`/post-deatils/${data?.pet_id}`, { state: data });
  };

  const handleApprove = () => {};

  return (
    <>
      <Card
        className="card-main-table"
        sx={{ marginTop: "20px", height: "400px", width: "100%" }}
      >
        <Table className="table-full" sx={{ width: "1000px" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ textAlign: "", color: "gray", marginleft: "15px" }}
              >
                <Checkbox />
              </TableCell>
              <TableCell sx={{ align: "right", color: "gray" }}>Date</TableCell>
              <TableCell
                sx={{ textAlign: "center", width: "1000px", color: "gray" }}
              >
                Pet Name
              </TableCell>
              <TableCell sx={{ color: "gray" }}>Category</TableCell>
              <TableCell
                sx={{ textAlign: "center", width: "1000px", color: "gray" }}
              >
                Breed
              </TableCell>
              <TableCell sx={{ color: "gray" }}>Price</TableCell>
              <TableCell
                sx={{ textAlign: "center", color: "gray", width: "1000px" }}
              >
                User
              </TableCell>
              <TableCell sx={{ color: "gray" }}>Location</TableCell>
              <TableCell sx={{ color: "gray " }}>Status</TableCell>
              <TableCell sx={{ color: "gray" }}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="tablebody">
         
                {fetchedData.map((data) => (
                  <TableRow key={data?.id} className="tablerow">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell sx={{ width: "1000px" }} key={data?.id}>
                      {data?.from_date}
                    </TableCell>
                    <TableCell>{data?.pet_name}</TableCell>
                    <TableCell>{data?.category_name}</TableCell>
                    <TableCell>{data?.breed}</TableCell>
                    <TableCell>₹{data?.price}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ textTransform: "none" }}
                        onClick={(e) => handleClick(data)}
                      >
                        {data?.name}
                      </Button>
                    </TableCell>
                    <TableCell>{data?.city}</TableCell>
                    <TableCell className="approve-order-btn">
                      {data?.status}
                    </TableCell>

                    <TableCell>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(PopupState) => (
                          <React.Fragment>
                            <Button {...bindTrigger(PopupState)}>...</Button>

                            <Menu
                              className="menu-on-approve-btn"
                              {...bindMenu(PopupState)}
                            >
                              <MenuItem>Approve Post </MenuItem>
                              <MenuItem>Reject Post </MenuItem>
                              <MenuItem>Close Post </MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </TableCell>
                  </TableRow>
                ))}
            
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
