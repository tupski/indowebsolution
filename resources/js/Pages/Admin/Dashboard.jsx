import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { 
    Grid, 
    Paper, 
    Typography, 
    Box, 
    Card, 
    CardContent, 
    CardHeader,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';
import {
    Article as ArticleIcon,
    People as PeopleIcon,
    Mail as MailIcon,
    DesignServices as ServicesIcon
} from '@mui/icons-material';

export default function Dashboard({ stats }) {
    // In a real app, these would come from the backend
    const dashboardStats = stats || {
        blogs: { total: 12, draft: 3, published: 9 },
        services: { total: 6, active: 5, inactive: 1 },
        team: { total: 4 },
        contacts: { total: 18, unread: 5 }
    };

    const recentContacts = [
        { id: 1, name: 'John Doe', subject: 'Website Inquiry', date: '2025-05-01' },
        { id: 2, name: 'Jane Smith', subject: 'SEO Services', date: '2025-04-29' },
        { id: 3, name: 'Mike Johnson', subject: 'Web Development Quote', date: '2025-04-28' }
    ];

    return (
        <AdminLayout title="Dashboard">
            <Head>
                <title>Admin Dashboard - PT. Indo Web Solution</title>
            </Head>

            <Grid container spacing={3}>
                {/* Stats Cards */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 140,
                            bgcolor: '#e3f2fd'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <ArticleIcon sx={{ mr: 1 }} />
                            <Typography component="h2" variant="h6" color="primary">
                                Blog Posts
                            </Typography>
                        </Box>
                        <Typography component="p" variant="h4">
                            {dashboardStats.blogs.total}
                        </Typography>
                        <Typography variant="body2" sx={{ flex: 1 }}>
                            {dashboardStats.blogs.published} published, {dashboardStats.blogs.draft} drafts
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 140,
                            bgcolor: '#e8f5e9'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <ServicesIcon sx={{ mr: 1 }} />
                            <Typography component="h2" variant="h6" color="primary">
                                Services
                            </Typography>
                        </Box>
                        <Typography component="p" variant="h4">
                            {dashboardStats.services.total}
                        </Typography>
                        <Typography variant="body2" sx={{ flex: 1 }}>
                            {dashboardStats.services.active} active, {dashboardStats.services.inactive} inactive
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 140,
                            bgcolor: '#fff8e1'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PeopleIcon sx={{ mr: 1 }} />
                            <Typography component="h2" variant="h6" color="primary">
                                Team Members
                            </Typography>
                        </Box>
                        <Typography component="p" variant="h4">
                            {dashboardStats.team.total}
                        </Typography>
                        <Typography variant="body2" sx={{ flex: 1 }}>
                            Total team members
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 140,
                            bgcolor: '#ffebee'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <MailIcon sx={{ mr: 1 }} />
                            <Typography component="h2" variant="h6" color="primary">
                                Contact Messages
                            </Typography>
                        </Box>
                        <Typography component="p" variant="h4">
                            {dashboardStats.contacts.total}
                        </Typography>
                        <Typography variant="body2" sx={{ flex: 1 }}>
                            {dashboardStats.contacts.unread} unread messages
                        </Typography>
                    </Paper>
                </Grid>

                {/* Recent Contacts */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Recent Contact Messages" />
                        <CardContent>
                            <List>
                                {recentContacts.map((contact, index) => (
                                    <React.Fragment key={contact.id}>
                                        <ListItem>
                                            <ListItemText
                                                primary={contact.name}
                                                secondary={
                                                    <>
                                                        <Typography component="span" variant="body2" color="text.primary">
                                                            {contact.subject}
                                                        </Typography>
                                                        {` — ${contact.date}`}
                                                    </>
                                                }
                                            />
                                        </ListItem>
                                        {index < recentContacts.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Quick Actions" />
                        <CardContent>
                            <Typography paragraph>
                                Welcome to the admin dashboard of PT. Indo Web Solution. From here, you can manage all aspects of your website.
                            </Typography>
                            <Typography paragraph>
                                Use the sidebar to navigate to different sections of the admin panel. You can manage blog posts, services, team members, contact messages, and website settings.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </AdminLayout>
    );
}
