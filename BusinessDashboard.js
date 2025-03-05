import React from "react";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box, Card, CardContent, Grid, Avatar } from "@mui/material";
import { Business, Work, MonetizationOn, Message } from "@mui/icons-material";

const drawerWidth = 240;

const BusinessDashboard = () => {
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
            {["Profile", "Projects", "Payments", "Messages"].map((text, index) => (
              <ListItem button key={text}>
                {index === 0 && <Business sx={{ marginRight: 1 }} />}
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
          Business Dashboard
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Active Projects</Typography>
                <Typography variant="h4">10</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Payments</Typography>
                <Typography variant="h4">$12,000</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Pending Invoices</Typography>
                <Typography variant="h4">2</Typography>
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
                <Avatar sx={{ marginRight: 2 }}>F</Avatar>
                <ListItemText primary="Freelancer A" secondary="Project update: 90% completed." />
              </ListItem>
              <ListItem>
                <Avatar sx={{ marginRight: 2 }}>G</Avatar>
                <ListItemText primary="Freelancer B" secondary="Can we discuss payment details?" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default BusinessDashboard;