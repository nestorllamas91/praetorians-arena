import { model, Schema } from 'mongoose';

const schema = new Schema(
  {
    _id: Number,
    steam: {
      id: String,
      nickname: String,
      name: String,
      profileUrl: String,
      country: String,
      avatarUrl: {
        smallSize: String,
        mediumSize: String,
        bigSize: String
      }
    },
    isLoggedIn: Boolean
  },
  {
    timestamps: {
      createdAt: 'creationDateUtc',
      updatedAt: 'modificationDateUtc'
    }
  },
  {
    collection: 'players'
  }
);

const Player = model('Player', schema);

export default Player;
