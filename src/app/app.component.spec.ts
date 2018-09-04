
xdescribe ('hellotest', ()=>{
    let expected = '';
    let notExpected = '';
    let expectMatch = null;
    beforeEach(()=>{
        expected = "hellotest";
        notExpected = "hellotest125";
        expectMatch = new RegExp(/^Hello/);
    });
    afterEach(()=>{
        let expected = '';
        let notExpected = '';
    })
    it("checks if hellotest is hellotest",()=>expect('hellotest').toBe(expected));
    it("checks if hellotest is not hellotest",()=>expect('hellotest').toBe(notExpected));
     it("checks if hellotest is start with hello ",()=>expect('hellotest').toBe(expectMatch));
})