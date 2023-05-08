import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

export default function Cart(props) {
  const [totalprice, setTotalPrice] = React.useState(0);
  console.log(props.cartItems);

  const incrementHandler = (list) => {
    props.onAdd(list);
    totalItem();
    props.onQuantityAdd(list);
  };

  const decrementHandler = (list) => {
    props.onRemove(list);
    props.onQuantityRemove(list);

    totalItem();
  };

  const totalItem = () => {
    let sum = 0;
    for (let i = 0; i < props.cartItems.length; i++) {
      sum = sum + props.cartItems[i].cartQuantity * props.cartItems[i].price;
      console.log(sum, props.cartItems);
      setTotalPrice(sum);
    }
  };
  React.useEffect(() => {
    if (props.cartItems.length === 0) {
      setTotalPrice(0);
    } else {
      totalItem();
    }
  }, [props.cartItems]);

  return (
    <div>
      {props.cartItems.map((list) => (
        <Card
          key={list.uuid}
          sx={{
            maxWidth: 600,
            // height: 150,
            display: "flex",
            margin: "auto",
            backgroundColor: "#bbdefb",
            border: "solid #0d47a1",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            sx={{
              height: 100,
              width: 100,
              alignItems: "center",
              mt: "30px",
              ml: "24px",
              borderRadius: "50%",
            }}
            image={list.imageUrl}
            title="Food items"
          />
          <CardContent sx={{ ml: "10px" }}>
            <CardActions>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "100px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    width: "200px",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>
                    {list.name}&nbsp;{" "}
                    <p
                      style={{
                        color: "dark-grey",
                        margin: 0,
                        padding: 0,
                        fontSize: "12px",
                      }}
                    >
                      x{list.cartQuantity} items
                    </p>
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      display: "inline-block",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Subtotal ₹{list.price * list.cartQuantity}
                  </p>
                </div>
              </div>
            </CardActions>
            <CardActions sx={{ display: "flex", alignItems: "flex-end" }}>
              <div style={{ display: "flex", gap: "12px", marginLeft: "80%" }}>
                <button
                  style={{
                    backgroundColor: "#7ae9d5",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  onClick={() => decrementHandler(list)}
                >
                  -
                </button>
                <Typography>{list.cartQuantity}</Typography>
                <button
                  style={{
                    backgroundColor: "#7ae9d5",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  onClick={() => incrementHandler(list)}
                >
                  +
                </button>
              </div>
            </CardActions>
          </CardContent>
        </Card>
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            mt: "20px",
          }}
        >
          Pay ₹{totalprice} and Order
        </Button>
      </div>
    </div>
  );
}
