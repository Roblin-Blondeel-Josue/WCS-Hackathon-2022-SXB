import { Box, Divider, Link, Typography } from "@mui/material";
import wiki from "wikipedia";
import React, { useEffect, useState } from "react";

function CityWikipediaInfos({ city }) {
  const [infos, setInfos] = useState("");
  const [url, setUrl] = useState("");

  const handleWikiParse = async () => {
    try {
      const page = await wiki.page(`${city.name}`);

      const summary = await page.summary();
      setInfos(summary.extract);
      setUrl(page.fullurl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleWikiParse();
  }, []);

  return (
    <>
      {infos && (
        <Box>
          <Typography gutterBottom variant="body1">
            {infos}
          </Typography>
          <Link href={url} underline="hover">
            See more on Wikipedia...
          </Link>
          <Divider sx={{ marginTop: "1rem" }} />
        </Box>
      )}
    </>
  );
}

export default CityWikipediaInfos;
