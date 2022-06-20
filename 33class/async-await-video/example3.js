const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);


const codeBlocker = () =>{
    // let i = 0;
    // while(i<1000000000){
    //     i++;
    // }
    // return "Hurry billion loop over"

    // return new Promise((resolve, reject) =>{
    //     let i = 0;
    //     while(i<10000000){
    //         i++;
    //     }
    //     resolve('Billion loop done')
    // })

    return Promise.resolve().then(v=>{
        let i =0;
        while(i<100000000){
            i++;
        }
        return 'Billion loop done'

    })
}


log(' Synchronous 1')

log(codeBlocker().then(log))

log(' Synchronous 2')