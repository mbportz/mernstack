import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';

const SideDrawer = props => {
  const content = (
    props.show && (
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    )
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
