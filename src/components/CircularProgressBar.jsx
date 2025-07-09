import "../index.scss";
function CircularProgressBar({ paramName, param }) {
  return (
    <div className={`progress-bar progress-${param}`}>
      <div className="circular">
        <div className="inner"></div>
        <div className="outer"></div>
        <div className="numb">
          <div className="numb-title">{paramName}</div>
          <div>{param}%</div>
        </div>
        <div className="circle">
          {param === 0 && (
            <div className="zero-dot">
              <span></span>
            </div>
          )}
          {param > 0 && (
            <div className="dot">
              <span></span>
            </div>
          )}
          <div className="bar left">
            <div className="left progress"></div>
          </div>
          <div className="bar right">
            <div className="right progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircularProgressBar;
