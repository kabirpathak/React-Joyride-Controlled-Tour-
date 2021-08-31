import styled from "styled-components";

const Button = styled.button`
  background-color: #daa588;
  color: #fff;
`;

const TooltipBody = styled.div`
  background-color: #343a40;
  min-width: 290px;
  max-width: 420px;
  border: #fff;
  border-style: solid;
  border-width: 1px;
  position: relative;
  border-radius: 5px;
  font-family: 'Arial';
  padding-bottom: 0.5rem;
`;

const TooltipContent = styled.div`
  color: #fff;
  padding: 20px;
  font-size: 16px;
`;

const TooltipTitle = styled.h2`
  align-self: center;
  color: #fff;
  padding:12px;
  margin: 0;
`;

const TooltipFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  padding: 5px;
  * + * {
    margin-left: 0.5rem;
  }
  ${Button} {
    padding: 0.5rem;
  }
`;



const Tooltip = ({
  continuous,
  index,
  isLastStep,
  step,
  backProps,
  primaryProps,
  skipProps,
  tooltipProps,
}) => {
  return (
    
    <TooltipBody {...tooltipProps}>
      {step.title && <TooltipTitle>{step.title}</TooltipTitle>}
      {step.content && <TooltipContent id = 'tourTooltipContent'>{step.content}</TooltipContent>}
      <TooltipFooter id = 'tourTooltipFooter'>
        {!isLastStep && (
          <Button icon = '' id = 'skipTourButton' {...skipProps} spacer={true}>
            Close tour
          </Button>
        )}
        {index > 0 && (
          <Button id= 'backTourButton' {...backProps}>
            Back
          </Button>
        )}
        <Button id = 'nextTourButton' {...primaryProps} autoFocus>
          
            {isLastStep? 'End tour' : 'Next'}
        </Button>
      </TooltipFooter>
    </TooltipBody>
    
  );
};

export default Tooltip;