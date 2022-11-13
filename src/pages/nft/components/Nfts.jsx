import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { GiRoundStar } from "react-icons/gi";

const Nfts = ({ item }) => {
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 345 }}
      className="p-2 rounded-2xl"
      key={item.id}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <div className="grid grid-cols-2">
          <p className="text-xs">{item.name}</p>
          <p className="font-bold text-sm ml-auto">{item.mbt}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-xs">{item.distance}</p>
          <p className="text-xs ml-auto">{item.availability}</p>
        </div>
        <div className="flex gap-x-2 mt-4">
          {[1, 2, 3, 4, 5].map((st) => (
            <GiRoundStar key={st} className="text-purple" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Nfts;
