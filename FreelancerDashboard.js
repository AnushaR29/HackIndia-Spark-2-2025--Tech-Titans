import React from "react";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box, Card, CardContent, Grid, Avatar } from "@mui/material";
import { AccountCircle, Work, MonetizationOn, Message } from "@mui/icons-material";

const drawerWidth = 240;

const FreelancerDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        // sx={{ width: drawerWidth, flexShrink: 0, [& .MuiDrawer-paper]: { width: drawerWidth, boxSizing: "border-box" } }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Profile", "Jobs", "Earnings", "Messages"].map((text, index) => (
              <ListItem button key={text}>
                {index === 0 && <AccountCircle sx={{ marginRight: 1 }} />}
                {index === 1 && <Work sx={{ marginRight: 1 }} />}
                {index === 2 && <MonetizationOn sx={{ marginRight: 1 }} />}
                {index === 3 && <Message sx={{ marginRight: 1 }} />}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Freelancer Dashboard
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Completed Jobs</Typography>
                <Typography variant="h4">25</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Earnings</Typography>
                <Typography variant="h4">$4,500</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Pending Jobs</Typography>
                <Typography variant="h4">3</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Messages */}
        <Typography variant="h6" sx={{ mt: 4 }}>Recent Messages</Typography>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <List>
              <ListItem>
                <Avatar sx={{ marginRight: 2 }}>A</Avatar>
                <ListItemText primary="Client A" secondary="Can you update the design?" />
              </ListItem>
              <ListItem>
                <Avatar sx={{ marginRight: 2 }}>B</Avatar>
                <ListItemText primary="Client B" secondary="Great job! Let's discuss the next project." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FreelancerDashboard;