import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const MenuList = ({
  menu,
  onCartAdd,
  onCartRemove,
  onQuantityAdd,
  onQuantityRemove,
  onFirstCartItem,
}) => {
  // const [increament, setIncreament] = useState(Dummy_list);

  // const incHandler = (uuid) => {
  //   const data = [...increament];

  //   const index = data.findIndex((item) => item.uuid === uuid);
  //   data[index].quantity += 1;
  //   setIncreament(data);
  //   props.inputitem(data);

  // };

  // const decHandler = (uuid) => {
  //   const data = [...increament];
  //   const index = data.findIndex((item) => item.uuid === uuid);
  //   data[index].quantity -= 1;
  //   if (data[index].quantity < 0) {
  //     data[index].quantity = 0;
  //   } else {
  //     setIncreament(data);
  //     props.inputitem(data);
  //   }
  // };
  const incrementHandler = (list) => {
    onQuantityAdd(list);
    onCartAdd(list);
  };
  const decrementHandler = (list) => {
    onQuantityRemove(list);
    onCartRemove(list);
  };
  const firstOrderAddHandler = (list) => {
    onQuantityAdd(list);
    onFirstCartItem(list);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",

        marginLeft: "80px",
        marginRight: "70px",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      {menu.map((list) => (
        <Card sx={{ maxWidth: 345, mt: "45px",mr:"15px",ml:"15px"}} key={list.uuid}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={list.imageUrl}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {list.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {list.description}
            </Typography>
          </CardContent>
          <CardActions>
            {list.quantity < 1 ? (
              <Button
                variant="contained"
                onClick={() => firstOrderAddHandler(list)}
              >
                Add
              </Button>
            ) : (
              <div>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ fontSize: "20px" }}
                  onClick={() => incrementHandler(list)}
                >
                  +
                </Button>
                <span sx={{ml:"10px",mr:"10px"}}>{list.quantity}</span>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ fontSize: "20px" }}
                  onClick={() => decrementHandler(list)}
                >

                  -

                </Button>
              </div>
            )}

            {/* {decreament} */}
          </CardActions>
          <CardActions>₹{list.price}</CardActions>
          <CardActions>
            <Rating
              name="half-rating-read"
              defaultValue={list.rating}
              precision={0.5}
              readOnly
            />
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default MenuList;
