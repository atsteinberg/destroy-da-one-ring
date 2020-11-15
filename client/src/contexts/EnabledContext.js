import React from 'react';

const EnabledContext = React.createContext({
  enabled: true,
  setEnabled: () => {},
});
export default EnabledContext;
