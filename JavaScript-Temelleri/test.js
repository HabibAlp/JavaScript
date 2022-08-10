/**
describe("HABİB", function(){
  
  function testEt(x){
    let beklenen = x*x*x
  }
  
  it(`${x}'in 3. kuvveti ${beklenen}'dir.`, function(){
    assert.equal(us(x,3),beklenen);
  });

  for (let x=1; x<=5; x++){
    testEt(x)
  }

});

**/

describe("HABİB", function(){
  it("Negatif sayılar için NaN dönmesi lazım", function(){
    assert.isNaN(us(2,-1));
  })
 
  it("Tam sayı değilse NaN dönmesi lazım", function(){
    assert.isNaN(us(2,2.5));
  });
  
});

