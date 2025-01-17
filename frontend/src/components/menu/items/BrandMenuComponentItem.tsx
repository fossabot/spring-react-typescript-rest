// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DataObjectIcon from '@mui/icons-material/DataObject'

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type BrandMenuComponentItemProps = {
    app_title: string
}
export default function BrandMenuComponentItemComponent(
    props: BrandMenuComponentItemProps
) {
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    flexFlow: 'row nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: 'auto',
                    width: '100%',
                    margin: '0 !important',
                    padding: '0 !important',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        alignSelf: 'center',
                        height: 'auto',
                        width: '100%',
                        maxWidth: '40px',
                        margin: '0 !important',
                        padding: '0 !important',
                    }}
                >
                    <DataObjectIcon
                        sx={{
                            color: '#212121',
                        }}
                    />
                </Box>
                <Typography
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        flex: 1,
                        alignSelf: 'center',
                        height: 'auto',
                        width: '100%',
                        margin: '0 !important',
                        padding: '0 !important',
                        color: '#212121',
                        fontSize: '0.9em !important',
                        fontWeight: '900',
                    }}
                >
                    {props?.['app_title']
                        ? props?.['app_title']
                        : process.env.REACT_APP_DEFAULT_APP_TITLE}
                </Typography>
            </Box>
        </React.Fragment>
    )
}

// System -%- ////
