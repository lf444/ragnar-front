import { Box, Grid, Container, Link } from '@mui/material';

export default function Footer() {
    return <footer>
        <Box px={{ xs: 3, sm: 10}} py={{ xs: 5, sm: 8}} sx={{backgroundColor: (theme) => theme.palette.secondary.main, color: (theme) => theme.palette.text.primary, op: "500px"}}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Test</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
}