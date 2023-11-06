import React from 'react';
import { dummyData } from '../../assets/dummyData';
import fbLogo from '../../assets/fbLogo.png';
import instaLogo from '../../assets/instaLogo.png';
import twitterLogo from '../../assets/twitterLogo.png';
import Grid from '@mui/material/Grid';
import "./styles.css";
import { Typography } from '@mui/material';

export default function SocailMediaComp() {
    const data = dummyData;
    return (
        <div className='ContainerSM'>
                <Typography className='headerSM'>Meet the Smartups team</Typography>
                <Typography className='SubHeaderSM'>This is a world class team who understand your entrepreneurial journey.</Typography>
        <div className='huhu'>
        <div className='mainContainerSM'>
            {data.map((item, key) => {
                return (
                    <div className='subContainerSM'>
                        <div className='imgBox'>
                            <img src={item.img_url} width='110rem' />
                        </div>
                        <div className='infoBox'>
                            <div className='nameBoxSM'>
                                <Typography className='NameSM'>{item.name}</Typography>
                                <Typography className='designationSM'>{item.designation}</Typography>
                                <Typography className='paragraphSM' pt={1.5} pb={1.5}>{item.paragraph}</Typography>
                            </div>
                            <div className='logoBox'>
                                <img src={fbLogo} width="36px" style={{ marginRight: '10px' }} />
                                <img src={instaLogo} width="36px" style={{ marginRight: '10px' }} />
                                <img src={twitterLogo} width="36px" />
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
        </div>
        </div>
    )
}


// export default function SocailMediaComp() {
//     const data = dummyData;
//     return (
//         <Grid className='ContainerSM'>
//             <Typography className='headerSM'>Meet the Smartups team</Typography>
//             <Typography className='SubHeaderSM'>This is a world class team who understand your entrepreneurial journey.</Typography>
//             <div className='dummy'>
//                 <Grid container
//                     rowGap={2} mt={3} className='mainContainerSM'>
//                     {data.map((item, key) => {
//                         return (
//                             <Grid item sm={6} md={6} lg={6} className='subContainerSM' p={1}>
//                                 <div className='imgBox'>
//                                     <img src={item.img_url} height='150px' width='150px' />
//                                 </div>
//                                 <div className='infoBox'>
//                                     <div className='nameBoxSM'>
//                                         <Typography className='NameSM'>{item.name}</Typography>
//                                         <Typography className='designationSM'>{item.designation}</Typography>
//                                         <Typography className='paragraphSM' pt={1.5} pb={1.5}>{item.paragraph}</Typography>
//                                     </div>
//                                     <div className='logoBox'>
//                                         <img src={fbLogo} width="36px" style={{ marginRight: '10px' }} />
//                                         <img src={instaLogo} width="36px" style={{ marginRight: '10px' }} />
//                                         <img src={twitterLogo} width="36px" />
//                                     </div>
//                                 </div>
//                             </Grid>
//                         )
//                     })}
//                 </Grid>
//             </div>
//         </Grid>
//     )
// }
