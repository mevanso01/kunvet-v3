import axios from 'axios';
import Config from 'config';
import Asset30 from '@/assets/icons/Asset(30).svg';
import Asset31 from '@/assets/icons/Asset(31).svg';

// const DefaultPic = 'https://github.com/leovinogradov/letteravatarpics/blob/master/Letter_Avatars/default_profile.jpg?raw=true';
const bDefaultPic = Asset30;
const iDefaultPic = Asset31;
const serverUrl = Config.get('serverUrl');

class ProfilePicHelper {
  static async getProfilePic(userID, businessID) {
    const { type, id } = {
      type: businessID ? 'business' : 'account',
      id: businessID || userID,
    };
    try {
      const { data } = await axios.get(`/profile-pic/${type}/${id}`);
      if (data.profilePictureId) {
        const url = `${serverUrl}/file/get/${data.profilePictureId}`;
        return url;
      }
      throw Error('Not found. Falling back to svg');
    } catch (ex) {
      if (type === 'business') {
        return bDefaultPic;
      }
      return iDefaultPic;
    }
  }
}

export default ProfilePicHelper;
