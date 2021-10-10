import { model, Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const schema = new Schema(
  {
    _id: Number,
    competition: {
      type: String,
      enum: [
        'dueling-1vs1',
        'dueling-2vs2',
        'dueling-3vs3',
        'dueling-4vs4',
        'scoring-xvsx',
        'tournament-1vs1',
        'tournament-2vs2',
        'tournament-3vs3',
        'tournament-4vs4'
      ]
    },
    type: {
      type: String,
      enum: ['casual', '7-days']
    },
    ranking: {
      type: ObjectId,
      ref: 'Ranking'
    },
    teams: {
      team1: {
        type: ObjectId,
        ref: 'Team'
      },
      team2: {
        type: ObjectId,
        ref: 'Team'
      }
    },
    games: [
      {
        type: ObjectId,
        ref: 'Game'
      }
    ],
    result: {
      type: String,
      enum: ['2-0', '2-1']
    },
    timestamp: {
      startDateUtc: Date,
      endDateUtc: Date
    },
    state: String
  },
  {
    timestamps: {
      createdAt: 'creationDateUtc',
      updatedAt: 'modificationDateUtc'
    }
  },
  {
    collection: 'combats'
  }
);

const Combat = model('Combat', schema);

export default Combat;
