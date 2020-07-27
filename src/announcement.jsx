import * as React from "react";
import Announcement from "react-announcement";
import Covid from "./data/covid.svg";
// https://reactjsexample.com/push-out-beautiful-website-announcements-in-react/

export default class Announce extends React.Component {
  render() {
    return (
      <Announcement
        title="COVID-19"
        subtitle="Check out our latest COVID-19 efforts by following this link!"
        link="https://observablehq.com/@spond"
        imageSource={Covid}
        daysToLive={0}
        secondsBeforeBannerShows={0}
        closeIconSize={30}
      />
    );
  }
}
