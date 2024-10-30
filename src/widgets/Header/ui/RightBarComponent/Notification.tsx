import { FaBell } from 'react-icons/fa6';
import { Tooltip } from '../../../../shared/Tooltip/Tooltip';

export const Notification = () => {
  return (
    <Tooltip
      position="bottom"
      content={<div className="text-nowrap">Notify content</div>}
    >
      <FaBell className="text-white" size={20} />
    </Tooltip>
  );
};
