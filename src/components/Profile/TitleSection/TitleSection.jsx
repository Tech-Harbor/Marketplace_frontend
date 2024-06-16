import LinkTo from '../LinkTo/LinkTo.jsx';
import { TitleProfileSection, Wrapper } from './TitleSection.styled.js';
import defaultUserPhoto from '../../../assets/svg/defaultUserPhoto.svg';

const userData = {
  imgUrl: '',
  userName: 'Ім’я',
  userEmail: 'username@gmail.com',
};

const TitleSection = () => {
  return (
    <TitleProfileSection>
      <img src={userData.imgUrl || defaultUserPhoto} alt={userData.userName} />

      <Wrapper>
        <div>
          <p className={'name'}>{userData.userName}</p>
          <LinkTo to={'/profile/edit'} title={'Редагувати'} className={'edit'} />
        </div>
        <p className={'email'}>{userData.userEmail}</p>
      </Wrapper>
    </TitleProfileSection>
  );
};

export default TitleSection;
