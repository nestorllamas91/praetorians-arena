import { model, Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const schema = new Schema(
  {
    _id: Number,
    gameFile: {
      filename: {
        original: String,
        system: String
      },
      sizeInKb: Number,
      uploading: {
        dateUtc: {
          date: String,
          time: String
        },
        uploaderPlayer: {
          type: ObjectId,
          ref: 'Player'
        }
      }
    },
    game: {
      playDateUtc: {
        date: String,
        time: String
      },
      modality: String,
      mapId: Number,
      playTime: String
    },
    teams: [
      {
        players: [
          {
            playerData: {
              type: ObjectId,
              ref: 'Player'
            },
            configOptions: {
              teamSymbol: {
                type: Number,
                enum: [1, 2, 3, 4, 5, 6, 7, 8]
              },
              civilization: {
                type: String,
                enum: ['Romans', 'Barbarians', 'Egyptians']
              },
              color: {
                type: Number,
                enum: [1, 2, 3, 4, 5, 6, 7, 8]
              }
            },
            gameResults: {
              kills: Number,
              losses: Number,
              unitsTrained: Number,
              score: Number,
              playTime: String
            }
          }
        ],
        winner: Boolean
      }
    ]
  },
  {
    timestamps: {
      createdAt: 'creationDateUtc',
      updatedAt: 'modificationDateUtc'
    }
  },
  {
    collection: 'games'
  }
);

const Game = model('Game', schema);

export default Game;
