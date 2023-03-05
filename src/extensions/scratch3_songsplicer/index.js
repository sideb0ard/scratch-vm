const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3SongSplicer {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'SongSplicer',
      name: 'Song Splicer',
      blocks: [{
        opcode: 'loadSong',
        blockType: BlockType.COMMAND,
        text: 'woof! [TEXT]',
        arguments: {
          TEXT: {
            type: ArgumentType.STRING,
            defaultValue: "bark"
          }
        }
      }],
      menus: {}
    };
  }

  loadSong(args) {
    const text = Cast.toString(args.TEXT);
  }
}

module.exports = Scratch3SongSplicer;
