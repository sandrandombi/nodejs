

const getCat = (text)=>{
    let bubble = ""
    const length = text.length
    // haut de bubble==========================

    bubble+= ' ' + '_'.repeat(length + 2) + '\n'
    // milieu de bubble========================
    bubble+= `<${text}> '\n'`  

    // bas de bubble===========================
    bubble+= ' ' + '_'.repeat(length + 2) + '\n'

    const cat = 
    '        \\    /\\_/\\\n' +
    '         \\  ( o.o )\n' +
    '          \\  > ^ <';
 return bubble + cat
}
const main = ()=> {
    const innerText = process.argv.slice(2).join(' ')
    console.log(getCat(innerText));
}
main()