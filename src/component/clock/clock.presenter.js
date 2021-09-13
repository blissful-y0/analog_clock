import {
  Clock,
  Hours,
  ClockFace,
  Minutes,
  Seconds,
  Tooltip,
  ToolTipText,
} from "./clock.style";

const ClockUI = ({ clockState }) => {
  return (
    <Tooltip>
      <Clock>
        <ClockFace />
        <Hours value={clockState.hoursDegrees} />
        <Minutes value={clockState.minDegrees} />
        <Seconds value={clockState.secDegrees} />
      </Clock>
      <ToolTipText>{`${clockState.hours} : ${clockState.minutes} : ${clockState.seconds}`}</ToolTipText>
    </Tooltip>
  );
};

export default ClockUI;
