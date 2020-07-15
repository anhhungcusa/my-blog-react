import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getMyProfile } from "../../../services";
import { message } from "antd";
export const AboutPage = () => {
  const profileId =  '5ea54ff9e3d8f9fe939a89b2'
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    getMyProfile(profileId)
    .then(user => setProfile({_id:user._id, ...user.profile}))
    .catch(err => message.error(err.message))
  }, [profileId])
  return <div className="About-page">
    {profile}
  </div>;
};
