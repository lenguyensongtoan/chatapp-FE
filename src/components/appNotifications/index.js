import CardSugest from "components/elements/CardSugest";
import Modal from "components/elements/Modal";
import CardNotification from "../elements/CardNotification";
const AppNotification = () => {
  return (
    <div className="app-right">
      <div className="mt-4">
        <h1>Notification</h1>
      </div>
      <div className="app-right__group-noti my-3">
        <CardNotification />
        <CardNotification />
        <CardNotification />
        <CardNotification />
        <CardNotification />
        <CardNotification />
        <CardNotification />
        <CardNotification />
      </div>
      <div className="app-activity-box">
        <div className="activity-info-boxes">
          <div className="activity-info-box time">
            <div className="info-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-clock"
                viewBox="0 0 24 24"
              >
                <defs />
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="info-text-wrapper">
              <span className="info-text-upper">13h</span>
              <span className="info-text-bottom">Time</span>
            </div>
          </div>
          <div className="activity-info-box atendee">
            <div className="info-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-users"
                viewBox="0 0 24 24"
              >
                <defs />
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className="info-text-wrapper">
              <span className="info-text-upper">32</span>
              <span className="info-text-bottom">Atendeed</span>
            </div>
          </div>
          <div className="activity-info-box meeting">
            <div className="info-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-calendar"
                viewBox="0 0 24 24"
              >
                <defs />
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <div className="info-text-wrapper">
              <span className="info-text-upper">122</span>
              <span className="info-text-bottom">Meetings</span>
            </div>
          </div>
          <div className="activity-info-box reject">
            <div className="info-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-x-square"
                viewBox="0 0 24 24"
              >
                <defs />
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <path d="M9 9l6 6M15 9l-6 6" />
              </svg>
            </div>
            <div className="info-text-wrapper">
              <span className="info-text-upper">12</span>
              <span className="info-text-bottom">Rejected</span>
            </div>
          </div>
        </div>
        <div className="activity-info-header">
          <span className="info-header-bold">Current Week</span>
          <span className="info-header-light">Activity</span>
        </div>
        <div className="activity-days-wrapper">
          <div className="day">
            <div className="chart"></div>
            <span>MON</span>
          </div>
          <div className="day">
            <div className="chart"></div>
            <span>TUE</span>
          </div>
          <div className="day current">
            <div className="chart"></div>
            <span>WED</span>
          </div>
          <div className="day">
            <div className="chart"></div>
            <span>THU</span>
          </div>
          <div className="day">
            <div className="chart"></div>
            <span>FRI</span>
          </div>
          <div className="day">
            <div className="chart"></div>
            <span>SAT</span>
          </div>
          <div className="day">
            <div className="chart"></div>
            <span>SUN</span>
          </div>
        </div>
      </div>
      <div className="app-right__group-noti mt-3">
        <CardSugest/>
        <CardSugest/>
        <CardSugest/>
        <CardSugest/>
        <CardSugest/>
        <CardSugest/>
      </div>
    </div>
  );
};

export default AppNotification;
