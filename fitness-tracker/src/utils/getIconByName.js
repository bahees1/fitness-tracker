import {
  FaWalking,
  FaRunning,
  FaDumbbell,
  FaBiking,
  FaSwimmer,
  FaHiking,
  FaQuestionCircle,
} from 'react-icons/fa';

const iconMap = {
  walking: FaWalking,
  running: FaRunning,
  dumbbell: FaDumbbell,
  biking: FaBiking,
  swimming: FaSwimmer,
  hiking: FaHiking,
};

const getIconByName = (name) => {
  const IconComponent = iconMap[name?.toLowerCase()];
  return IconComponent ? <IconComponent /> : <FaQuestionCircle />;
};

export default getIconByName;
