describe('replaceVowel', function(){
  it('take a vowel and replace with a hyphon', function(){
    expect(replaceVowel('banana apple')).to.equal('b-n-n- -ppl-');
  });
});
