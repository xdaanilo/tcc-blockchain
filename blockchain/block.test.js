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
});