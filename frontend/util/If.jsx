import React from 'react';

export default function ({ condition, then: ThenComponent, else: ElseComponent}) {
  return condition ? ThenComponent : ElseComponent;
}

// by: Mike Boan
