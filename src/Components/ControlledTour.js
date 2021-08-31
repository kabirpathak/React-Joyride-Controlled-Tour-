import React from 'react';
import ReactJoyride from 'react-joyride';
import Tooltip from './Tooltip';


const ControlledTour = (props) => {

      return (
          <>
        <ReactJoyride steps={props.TOUR_STEPS}
        continuous
        tooltipComponent={Tooltip} 
        disableCloseOnEsc= {true}
        disableOverlayClose = {true}
        showSkipButton={true} 
        styles={{
         backgroundColor:'steelblue',
         tooltipContainer: {
           textAlign: "left",
           disableAnimation: 'true',
         },
         buttonNext: {
           backgroundColor: 'green',
           
         },
         buttonBack: {
           marginRight: 10,
         }
       }}
        locale={{
           last: "End tour",
           skip: "Close tour",
         }}
        />
        </>
      );
};

export default ControlledTour