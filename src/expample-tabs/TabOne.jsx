import React from "react";

const images = [
  "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg",
  "https://lh3.googleusercontent.com/proxy/vN_YwFvrdjli8e5yh-Be6mgjk5_hJ6Fr0OpEqVeus2YVTqPRzd7nmGvZkLw1EgwoUeETlMkRhx_CgpkMmps9e66uA6XsSykXRjneBnXUwg0p6nDz8cHuMnuf0WLwuUsZ",
  "https://2krota.ru/wp-content/uploads/2019/02/0_i-1.jpg",
  "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg",
  "https://anekdotsuper.ru/assets/image/fon/dets-1.jpg",
  // "https://lh3.googleusercontent.com/proxy/Zy5F9NQ7urdI4dfhQT1EOIORK_cqZFfgum9D11kgZP3FVHd36KVaomKiKcALSazlw_3s6V8kuXUAKIpq1FJ6yl0vbseLNyzIAKoUkaimDsgzW9q1uFSuufEi4p89mT4qaAz7VaHb2A",
  // "https://lh3.googleusercontent.com/proxy/DciXhJB69mCb3Tc18Y8eoIWghsa-xD8mhPsnaD9MPSDzEHj__h-SwJdwqNWrMvBQbSkgoIn1Odvka7uHu0QHEdQxwiaYbnIvoNVNw4hTYYNOqxWcrzfl49IURBcZgUTrQCWMFsnw"
];

const Img = ({ url }) => {
  return <img style={{ maxWidth: "400px" }} src={url} />;
};

export const TabOne = () => {
  return (
    <div>
      {images.map(url => (
        <Img url={url} key={url} />
      ))}
    </div>
  );
};
