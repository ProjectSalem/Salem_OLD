/**
 * Created by ugurcem on 20/02/2017.
 */
import React from 'react';
import 'grommet/scss/vanilla/index';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';

const Home = () =>
    <div>
        <Box direction='row'
             justify='center'
             align='center'
             alignContent="center"
             wrap={true}
             pad='medium'
             margin='small'
             colorIndex='light-1'>
            <Stream />
        </Box>
        <Box direction='row'
             justify='start'
             align='center'
             wrap={true}
             pad='medium'
             margin='small'
             colorIndex='light-1'>


            <Box direction='row'
                 justify='start'
                 align='center'
                 wrap={true}
                 pad='medium'
                 margin='small'
                 colorIndex='light-1'>
                <Meter vertical={false}
                       type='arc'
                       size='medium'
                       value={78}
                />
                <Value value={12}
                       units='liter'
                       size='small'/>
            </Box>


            <Box direction='row'
                 justify='start'
                 align='center'
                 wrap={true}
                 pad='medium'
                 margin='small'
                 colorIndex='light-1'>
                <Meter vertical={false}
                       type='arc'
                       size='medium'
                       value={40}
                />
                <Value value={9}
                       units='kg'
                       size='small'/>
            </Box>
        </Box>
    </div>;

const Stream = () =>
    <Hero background={<Image src='/cam-cat.png'
          fit='cover' />}
          backgroundColorIndex='dark'
          size='medium'/>;

export default Home;