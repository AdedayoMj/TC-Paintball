import {notification} from 'antd';

const notify =(type, msg, desc) => {
    notification.config({
       color:'red'
      });
        notification.destroy();
        
        notification[type]({
            message: msg,
            description: desc
        });
}

export default notify;