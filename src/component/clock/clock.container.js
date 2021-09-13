import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTime } from "../../actions";
import ClockUI from "./clock.presenter";

const Clock = () => {
  const dispatch = useDispatch();
  const clockState = useSelector((state) => state.clockState);

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(updateTime());
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [dispatch]);

  return <ClockUI clockState={clockState} />;
};

export default Clock;
