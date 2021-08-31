export default [
    {
      target: '#btn1',
      title: 'Title 1',
      content: " Click on the first button to move to the second button.",
      disableBeacon: true,
      spotlightClicks: true,
      disableOverlayClose: true,
    },
    {
      target: '#btn2',
      content: "This is the second button. Click on it to move to the third button.",
      spotlightClicks: true,
      disableOverlayClose: true,
      disableCloseOnEsc: true,
    },
    {
      target: '#btn3',
      content: "This is the third button. Click here to move to the next element.",
      disableBeacon: true,
      disableOverlayClose: true,
      disableCloseOnEsc: true,
     
    },
    {
      target: '#x',
      content: "It works! I hope that you'll find my code to be beneficial. ",
      disableBeacon : true,
    },
  ];