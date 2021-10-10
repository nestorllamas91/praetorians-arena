import { model, Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const schema = new Schema(
  {
    _id: Number,
    name: String,
    players: [
      {
        playerData: {
          type: ObjectId,
          ref: 'Player'
        },
        combatEnrollmentState: {
          type: String,
          enum: ['pending', 'accepted', 'refused', 'canceled']
        }
      }
    ],
    stats: {
      points: Number,
      victories: Number,
      defeats: Number
    }
  },
  {
    timestamps: {
      createdAt: 'creationDateUtc',
      updatedAt: 'modificationDateUtc'
    }
  },
  {
    collection: 'teams'
  }
);

const Team = model('Team', schema);

export default Team;
