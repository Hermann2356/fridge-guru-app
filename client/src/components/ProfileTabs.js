// Import Libraries
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FaHeart } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import { RiUserFollowLine, RiUserFollowFill } from "react-icons/ri";

// Import Styles
import "../components_stylesheets/ProfileTabs.css";

// Import Components
import ProfilesPostsTab from "./ProfilesPostsTab";
import ProfileFollowingTab from "./ProfileFollowingTab";
import ProfileFollowersTab from "./ProfileFollowersTab";
import ProfileRecipesTab from "./ProfileRecipesTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="profile__tabs__container mt-0"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          focusVisibleClassName="__active"
          indicatorColor="primary"
        >
          <LinkTab
            icon={<BsFilePost style={{ fontSize: "1.3rem" }} />}
            label="Posts"
            href="/posts"
            {...a11yProps(0)}
          />
          <LinkTab
            icon={<RiUserFollowLine style={{ fontSize: "1.3rem" }} />}
            label="Following"
            href="/following"
            {...a11yProps(1)}
          />
          <LinkTab
            icon={<RiUserFollowFill style={{ fontSize: "1.3rem" }} />}
            label="Followers"
            href="/followers"
            {...a11yProps(2)}
          />
          <LinkTab
            icon={<FaHeart style={{ fontSize: "1.3rem" }} />}
            label="Saved Recipes"
            href="/saved-recipes"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProfilesPostsTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileFollowingTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileFollowersTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProfileRecipesTab />
      </TabPanel>
    </div>
  );
}
