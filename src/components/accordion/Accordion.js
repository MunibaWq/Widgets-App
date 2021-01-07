import React, { Fragment } from "react";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => console.log(`Title Clicked ${index}`)}
        >
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
