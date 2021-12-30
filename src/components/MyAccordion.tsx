import React from "react";

export interface MyAccordionProps {
  list: Array<any>;
  renderHeader: (item: any) => React.ReactNode;
  renderPanel: (item: any) => React.ReactNode;
}

const MyAccordion: React.FC<MyAccordionProps> = ({
  list,
  renderPanel,
  renderHeader,
}) => {
  const headerClicked = (_event: any) => {
    // console.log(_event);
    _event.currentTarget.classList.toggle("active");
    /* Toggle close all panels, except on that was clicked */
    const allPanels = document.getElementsByClassName("panel");

    Array.from(allPanels).forEach((panel: any) => {
      if (_event.currentTarget.nextElementSibling !== panel) {
        panel.style.maxHeight = null;
      }
      panel.previousElementSibling.classList.remove("active");
    });
    /* Toggle between hiding and showing the active panel */
    var panel = _event.currentTarget.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <button className="accordion" onClick={headerClicked}>
              {renderHeader(item)}
            </button>
            <div className="panel">{renderPanel(item)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MyAccordion;