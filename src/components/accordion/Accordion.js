import React, { Fragment } from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (index) => {
    console.log(`Title Clicked ${index}`);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
