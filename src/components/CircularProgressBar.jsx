import PropTypes from "prop-types";

/**
 * CircularProgressBar component.
 * Displays a circular progress indicator with a percentage and label.
 *
 * @param {string} paramName - The name/label for the progress parameter.
 * @param {number} param - The progress value (0-100).
 */
function CircularProgressBar({ paramName, param }) {
  return (
    <div className={`progress-bar progress-${param}`}>
      <div className="circular">
        <div className="inner" />
        <div className="outer" />
        <div className="numb">
          <div className="numb-title">{paramName}</div>
          <div>{param}%</div>
        </div>
        <div className="circle">
          {param === 0 ? (
            <div className="zero-dot">
              <span />
            </div>
          ) : (
            <div className="dot">
              <span />
            </div>
          )}
          <div className="bar left">
            <div className="left progress" />
          </div>
          <div className="bar right">
            <div className="right progress" />
          </div>
        </div>
      </div>
    </div>
  );
}

CircularProgressBar.propTypes = {
  paramName: PropTypes.string.isRequired,
  param: PropTypes.number.isRequired,
};

export default CircularProgressBar;
