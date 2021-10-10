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
    numPlayersPerGame: {
      type: Number,
      enum: [-1, 2, 3, 4, 5, 6, 7, 8]
    },
    teams: [
      {
        teamData: {
          type: ObjectId,
          ref: 'Team'
        },
        rank: Number
      }
    ],
    timestamp: {
      startDateUtc: Date,
      endDateUtc: Date,
      year: Number,
      quarter: {
        type: Number,
        enum: [1, 2, 3, 4]
      }
    },
    state: {
      type: String,
      enum: ['inscription', 'playing', 'closed', 'canceled']
    }
  },
  {
    timestamps: {
      createdAt: 'creationDateUtc',
      updatedAt: 'modificationDateUtc'
    }
  },
  {
    collection: 'rankings'
  }
);

const Ranking = model('Ranking', schema);

export default Ranking;
