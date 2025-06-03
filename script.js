


window.onload  = () =>{
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    const pickRandomElement = (list) =>list[
        Math.floor(Math.random()*list.length)];
    

    let excusa = `${pickRandomElement(who)} ${pickRandomElement(action)} ${pickRandomElement(what)} ${pickRandomElement(when)}`;
    let doc = document.getElementById("excuse")
    doc.textContent = excusa;

}


