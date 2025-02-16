import React, { useState } from 'react';
import Box from '@mui/material/Box';
import texture2 from './img/texture2.jpg';
import { useMediaQuery} from '@mui/material';
import Button from '@mui/material/Button';
import { GlobalStyles, Typography, styled as muiStyled } from '@mui/material';
import { Stack } from '@mui/material';
import MainMenu from './menu/MainMenu';
import fight from './img/fight.webp';
import pixelBackground1 from './img/2FightersBackground.webp';
import pixelBackground2 from './img/2Fighters.webp';
import monitorTexture from './img/brick1.webp';
import pulse from 'react-animations/lib/pulse';
import flash from 'react-animations/lib/flash';
import fadeIn from 'react-animations/lib/fade-in';
import styled, { keyframes } from 'styled-components';
import slideInRight from 'react-animations/lib/slide-in-right';
import slideInLeft from 'react-animations/lib/slide-in-left';
import NostradamageFooter from './NostradamageFooter';

export default function NostradamagePrototype() {

  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  const NostraBigText = muiStyled(Typography)({
      color: 'white',
      fontSize:  isSmallScreen ? '1.5em' : '4em',
      fontFamily: 'Pixelify Sans'
  });

  const PressPredict = muiStyled(Typography)({
      color: 'white',
      fontSize: '2em',
      fontFamily: 'VT323'
  });

  const EventName = muiStyled(Typography)({
      fontSize: isSmallScreen ? '1.2em' : '1.8em',
      color: 'white', 
      fontFamily: 'VT323'
  });

  const EventData = muiStyled(Typography)({
    fontSize: isSmallScreen ? '0.8em' : '1.2em',
    color: 'white', 
    fontFamily: 'VT323'
  });

  const LoadingText = muiStyled(Typography)({
    fontSize: isSmallScreen ? '1.8em' : '2.4em',
    fontFamily: 'VT323'
  });

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  if (error) {
    return <div>Error: {error}</div>;
  }

   const [UFCEvents, setUFCEvents] = useState(['UFC_Fight_Night_Cannonier_vs_Rodrigues_', 'UFC_312_Du_Plessis_vs_Strickland_2_', 'UFC_311_Makhachev_vs_Moicano','UFC_Fight_Night_Covington_vs_Buckley', 'UFC_309', 'UFC_Fight_Night_Yan_vs_Figueiredo']);

  const [expandedEvent, setExpanded] = useState(null);



  const SlideInRightAnimation = keyframes`${slideInRight}`;

  const SlideInRightDiv = styled.div`
    animation: 2s ${SlideInRightAnimation};
  `;

  const SlideInLeftAnimation = keyframes`${slideInLeft}`;

  const SlideInLeftDiv = styled.div`
    animation: 2s ${SlideInLeftAnimation};
  `;

  const flashAnimation = keyframes`${flash}`;

  const FlashDiv = styled.div`
    animation: 3s ${flashAnimation} infinite;`;

  const fadeAnimation = keyframes`${fadeIn}`;

  const FadeDiv = styled.div`
    animation: 1.5s ${fadeAnimation};`;

  const pulseAnimation = keyframes`${pulse}`;

  const PulseDiv = styled.div`
    animation: 2s ${pulseAnimation}; `;



  const handleEventClick = async (event) => {
    setExpanded(event);
    try {
      // Gör anropet till API:t
      const response = await fetch(`https://nostradamage.onrender.com/api/${event}`);
      
      // Om svaret inte är OK (statuskod 200), kasta ett fel
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Omvandla svaret till JSON
      const eventData = await response.json();
      setData((prevData) => ({ ...prevData, [event]: eventData }));
    } catch (err) {
      setError(err);  // Hantera eventuella fel
      console.error('Error fetching data:', err);
    }
   
    console.log(data)
  }

  const resetView = () => {
    setExpanded(null);
  };

  const [visiblePulseDivs, setVisiblePulseDivs] = useState({});
  const [latestClick, setLatestClick] = useState({});

  // Toggle visibility of the PulseDiv when a Stack is clicked
  const toggleVisibility = (idx) => {
    setVisiblePulseDivs((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
    setLatestClick(idx)
  };

  const [selectedItem, setSelectedItem] = useState('Prototype');

  console.log(data)
  return (
    <>
      
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            background: 'black',
            overflowX: 'hidden',
          },
          html: {
            margin: 0,
            padding: 0,
          }
        }}
      />
      <Stack
        sx={{
          width: '100%'
        }}
      >
        <MainMenu setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
          <Stack
            sx={{
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                background: 'radial-gradient(circle, rgba(255,185,0,1) 0%, #ed652b 60%)',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${texture2})`,
                backgroundSize: 'cover',
                alignItems: 'center',
                padding: '0px',
                margin: '0px',
              }}
            >
              <Box sx={{ minHeight: '78vh'}}>
                <Stack
                  sx={{
                    padding: '1em',
                    backgroundImage: `linear-gradient(rgba(0, 0, 150, 0.1), rgba(11, 21, 74, 0.6)), url(${monitorTexture})`,
                    backgroundSize: '50%',
                    border: '1px solid rgba(0, 0, 50, 1)', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '50vw',
                    borderRadius: '25px',
                    margin: '2em',
                    marginTop: '2em',
                    minHeight: '65vh',
                    maxHeight: '65vh'
                  }}
                >
          
                  <Box
                    sx={{
                      display: 'flex',
                      backgroundImage: expandedEvent
                        ? `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.6)), url(${pixelBackground2})` 
                        : `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 0, 0.6)), url(${pixelBackground1})`,
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center top',
                      justifyContent: 'center',
                      width: '60vw',
                      borderRadius: '12px',
                      padding: '1em',
                      marginTop: '3em',
                      marginBottom: '3em',
                      minHeight: '50vh',
                      minWidth: '30vw',
                      maxHeight: '50vh',
                      overflowY: 'auto', 
                      overflowX: 'hidden',
                      border: '8px solid black',
                    }}
                  >
                    
                    <Stack direction='column' justifyContent='center' alignItems='center' 
                      sx={{ height: '100%', borderRadius: '10px', width: '100%'
                      }}
                    >
                      
                        <Stack direction='row' gap={1} alignItems='flex-start' justifyContent='center' m={3}>
                          {
                            expandedEvent ? (
                                <>
                                  <NostraBigText>
                                      Nostra
                                  </NostraBigText>
                                
                                  <NostraBigText>
                                      damage
                                  </NostraBigText>
                                </>
                            ) : (
                              <>
                                <SlideInLeftDiv>
                                    <NostraBigText>
                                      Nostra
                                    </NostraBigText>
                                </SlideInLeftDiv>
                                <SlideInRightDiv>
                                  <NostraBigText>
                                      damage
                                  </NostraBigText>
                                </SlideInRightDiv>
                              </>
                            )
                          }
                          
                            
                                  
                        </Stack>
                        <Stack direction='row' gap={1} alignItems='flex-start' justifyContent='center' m={3}>
                          {
                            expandedEvent ? (
                            <LoadingText>
                              {JSON.stringify(expandedEvent).replaceAll('_', ' ').slice(1, -1)}
                            </LoadingText>
                            ) : (
                              null
                            )
                          }
                          
                          </Stack>

                      <FlashDiv>
                        {!expandedEvent && <PressPredict>Press to predict</PressPredict>}
                      </FlashDiv>
                      {expandedEvent ? (
                        <>
                          <Button variant="contained" onClick={resetView} sx={{ marginBottom: '1em', maxWidth: '18em', fontFamily: "Pixelify Sans", fontSize: '1.3em', backgroundColor: '#ed652b',  '&:hover': {
                              backgroundColor: '#b6451a', 
                            }, }}>
                            Reset
                          </Button>
                          {data[expandedEvent] ? (
                            <Box
                              sx={{
                                marginTop: '20px',
                                marginBottom: '20px',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column'
                              }}
                            >
                              
                              <FlashDiv>
                                {expandedEvent && <PressPredict>Press to predict</PressPredict>}
                              </FlashDiv>
                              <Box
                                sx={{
                                  width: '100%',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'flex-start',
                                  alignItems: 'flex-start',
                                  flexWrap: 'wrap', // Add flexWrap to allow items to wrap
                                  gap: '1em', // Add gap between items
                                }}
                              >
                                {Object.keys(data[expandedEvent]).map((matchupName, index) => (
                                  <Stack
                                  onClick={() => toggleVisibility(matchupName)}
                                  key={index}
                                  sx={{
                                    cursor: "pointer",
                                    // backgroundSize: 'cover', 
                                    padding: '12px',
                                    paddingLeft: '16px',
                                    margin: '4px',
                                    marginTop: '2em',
                                    minWidth: '50%',
                                    backgroundColor: 'black',
                                    flex: '1 1 30%',
                                    border: visiblePulseDivs[matchupName] ? '0.5em solid #ed652b' : '0.5em solid white',
                                    transition: 'background-image 1.8s', // Add transition for smooth effect
                                  }}
                                    gap={1}
                                  >
                                  
                                    <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
                                      <EventName>
                                        {data[expandedEvent][matchupName].Fight}
                                      </EventName>
                                    </Stack>
                                    <Stack>
                                     
                                        <Stack flexDirection={isSmallScreen ? 'column' : 'row'} gap={2} mt={4} >
                                          {/* <Typography className='data' sx={{ fontSize: '20px', color: 'white', fontFamily: 'VT323' }}>
                                            {fighter}:
                                          </Typography> */}
                                          {visiblePulseDivs[matchupName] && (
                                            <Stack  width={'100%'} justifyContent={'center'} alignItems={'center'}>
                                              {latestClick == matchupName ? (
                                                <>
                                                  <Stack  width={isSmallScreen ? '90%' : '40%'} justifyContent={'center'} alignItems={'center'}>
                                                    {/* <FadeDiv>
                                                      <PulseDiv> */}
                                                        <Stack width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                          <EventData>
                                                            Winner:&nbsp;
                                                          </EventData>
                                                          <EventData>
                                                            {data[expandedEvent][matchupName].Pred_winner}
                                                          </EventData>
                                                        </Stack>
                                                        <Stack width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                          <EventData>
                                                            Win percentage:&nbsp;
                                                          </EventData>
                                                          <EventData>
                                                            {data[expandedEvent][matchupName].Pred_win_pct}%
                                                          </EventData>
                                                        </Stack>
                                                        <Stack width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                          <EventData>
                                                            Method:&nbsp;
                                                          </EventData>
                                                          <EventData>
                                                            {data[expandedEvent][matchupName].Pred_method}
                                                          </EventData>
                                                        </Stack>
                                                        <Stack width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                          <EventData>
                                                            Method percentage:&nbsp;
                                                          </EventData>
                                                          <EventData>
                                                            {data[expandedEvent][matchupName].Pred_method_pct}%
                                                          </EventData>
                                                        </Stack>
                                                      {/* </PulseDiv>
                                                    </FadeDiv> */}
                                                 </Stack>
                                                </>
                                              ) : (
                                                <>
                                                  <Stack  width={isSmallScreen ? '90%' : '40%'} justifyContent={'center'} alignItems={'center'}>
                                                    <Stack width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                      <EventData>
                                                        Winner:&nbsp;
                                                      </EventData>
                                                      <EventData>
                                                        {data[expandedEvent][matchupName].Pred_winner}
                                                      </EventData>
                                                    </Stack>
                                                    <Stack width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                      <EventData>
                                                        Win percentage:&nbsp;
                                                      </EventData>
                                                      <EventData>
                                                        {data[expandedEvent][matchupName].Pred_win_pct}%
                                                      </EventData>
                                                    </Stack>
                                                    <Stack width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                      <EventData>
                                                        Method:&nbsp;
                                                      </EventData>
                                                      <EventData>
                                                        {data[expandedEvent][matchupName].Pred_method}
                                                      </EventData>
                                                    </Stack>
                                                    <Stack width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                      <EventData>
                                                        Method percentage:&nbsp;
                                                      </EventData>
                                                      <EventData>
                                                        {data[expandedEvent][matchupName].Pred_method_pct}%
                                                      </EventData>
                                                    </Stack>
                                                  </Stack>
                                                </>
                                              )}
                                            </ Stack>
                                          )}
                                        </Stack>
                                    
                                    </Stack>
                                  </Stack>
                                ))}
                              </Box>
                            </Box>
                          ) : (
                            <Stack direction='row' justifyContent='center' alignItems='center' gap={1}>
                              <LoadingText>Loading...</LoadingText>
                              <img style={{ height: '4em', width: '4em', borderRadius: '50%'}} src={fight}/>
                            </Stack>
                            
                          )}
                        </>
                      ) : (
                        UFCEvents.map((event, index) => (
                          <Stack mt={3} sx={{ backgroundColor: 'white', width: isSmallScreen ? '100%' : '50%',  
                            border: '5px solid black',  }}>
                            <Button
                              key={index}
                              variant="contained"
                              onClick={() => handleEventClick(event)}
                              sx={{ margin: '1em', fontSize: '18px', fontWeight: 'semiBold', fontFamily: "Pixelify Sans", backgroundColor: '#ed652b',  '&:hover': {
                                backgroundColor: '#b6451a', 
                              }, }}
                            >
                              {JSON.stringify(event).replaceAll('_', ' ').slice(1, -1)}
                            </Button> 
                          </Stack>
                        ))
                      )}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        <NostradamageFooter />
      </Stack>
    </>
  );
}
