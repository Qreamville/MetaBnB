import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { GiRoundStar } from "react-icons/gi";
import { showcaseData } from "../../../utils/link";

const Showcase = () => {
  return (
    <section className="container mx-auto my-14 px-2 xs:px-0">
      <h2 className="text-2xl md:text-4xl sm:text-5xl text-center my-10 font-bold">
        Inspiration for your next adventure
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-3">
        {showcaseData.map((data) => (
          <Card
            variant="outlined"
            sx={{ maxWidth: 345 }}
            className="p-2"
            key={data.id}
          >
            <CardMedia
              component="img"
              height="140"
              image={data.image}
              alt={data.name}
            />
            <CardContent>
              <div className="grid grid-cols-2">
                <p className="text-xs">{data.name}</p>
                <p className="font-bold text-sm ml-auto">{data.mbt}</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xs">{data.distance}</p>
                <p className="text-xs ml-auto">{data.availability}</p>
              </div>
              <div className="flex gap-x-2 mt-4">
                {[1, 2, 3, 4, 5].map((st) => (
                  <GiRoundStar key={st} className="text-purple" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
