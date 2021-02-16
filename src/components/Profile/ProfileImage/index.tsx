import React from "react";

import { ProfileImageContainer, AccountImage } from "./styles";

interface ProfileImageProps {
  imageUrl?: string;
}

const ProfileImage: React.FunctionComponent<ProfileImageProps> = ({
  imageUrl,
}) => {
  return (
    <ProfileImageContainer>
      <AccountImage source={require("../../../img/alex.jpg")}></AccountImage>
    </ProfileImageContainer>
  );
};

export default ProfileImage;
