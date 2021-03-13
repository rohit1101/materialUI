import { Box, Grid, Link, Typography } from "@material-ui/core";
import React, { useState } from "react";

const NavbarLinks = () => {
  const [links] = useState([
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Opinion",
    "Science",
    "Health",
    "Style",
    "Travel",
  ]);

  return (
    <Box padding={2}>
      <Grid container spacing={2} justify="space-between">
        {links.map((link) => {
          return (
            <Grid item>
              <Typography variant="body1">
                <Link onClick={(e) => e.preventDefault()} href="#">
                  {link}
                </Link>
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default NavbarLinks;
