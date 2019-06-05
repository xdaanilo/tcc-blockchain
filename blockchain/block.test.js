const Block = require ('./block');

describe('Block', function(){
    let data, lastBlock, block;

    beforeEach(function(){
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('sets the `data` to macth the input', function(){
        expect(block.data).toEqual(data);   
    });
    
    it('set the `lastHash` to macth the hash of the last block', function(){
        expect(block.lastHash).toEqual(lastBlock.hash);
    });

    it('generates a hash that matches the difficulty', function(){
        expect(block.hash.substring(0, block.difficulty)).toEqual('0'.repeat(block.difficulty));
    });

    it('lowers the difficulty for slowly mined block', function(){
        expect(Block.adjustDifficulty(block, block.timestamp+360000)).toEqual(block.difficulty-1);
    });

    it('raises the difficulty for quickly mined blocks', function(){
        expect(Block.adjustDifficulty(block, block.timestamp+1)).toEqual(block.difficulty+1);
    });
});