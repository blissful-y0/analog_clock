import { Clock, Hours, ClockFace, Minutes, Seconds } from "./clock.style";

const ClockUI = ({ clockState }) => {
  console.log(clockState);
  return (
    <Clock>
      <ClockFace />
      <Hours value={clockState.hoursDegrees} />
      <Minutes value={clockState.minDegrees} />
      <Seconds value={clockState.secDegrees} />
    </Clock>
  );
};

export default ClockUI;
