import { StyledLink } from '../../common';
import defaultUserPhoto from '../../../assets/svg/defaultUserPhoto.svg';
import { TitleProfileSection, Wrapper } from './TitleSection.styled.js';

const userData = {
  imgUrl: '',
  userName: 'Ім’я',
  userEmail: 'username@gmail.com',
};

const TitleSection = () => {
  const avatar = userData.imgUrl || defaultUserPhoto;

  return (
    <TitleProfileSection>
      <img src={avatar} alt={userData.userName} />

      <Wrapper>
        <div>
          <p className={'name'}>{userData.userName}</p>
          <p className={'email'}>{userData.userEmail}</p>
        </div>
        <StyledLink to={'/profile/edit'}>{'Редагувати'}</StyledLink>
      </Wrapper>
    </TitleProfileSection>
  );
};

export default TitleSection;
