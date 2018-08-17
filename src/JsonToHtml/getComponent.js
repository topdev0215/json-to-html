import React from 'react';

export function getComponent(config, nodeType) {
  if (nodeType in config) {
    return config[nodeType];
  }
  return ({children}) => <div className="type-not-present-in-config">{children}</div>;
}