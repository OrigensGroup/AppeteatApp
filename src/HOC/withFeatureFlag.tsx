import React from 'react';

import useSettings from '../hooks/useSettings';

const withFeatureFlag = <T extends any>(
  Component: React.ComponentType<T>,
  flagName: string,
  Placeholder?: React.ComponentType
) => {
  const FeatureFlag = (props: T): JSX.Element => {
    const [settings] = useSettings();

    const isFeatureFlagged = settings.features[flagName];

    if (!isFeatureFlagged) {
      return Placeholder ? <Placeholder /> : <></>;
    }

    return <Component {...props} />;
  };

  return FeatureFlag;
};

export default withFeatureFlag;
