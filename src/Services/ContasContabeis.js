export const contasContabeisKey = "contasContabeis";


export const saveContaContabil = (contaContabil)=>{
    let contasContabeis = getContasContabeis();

     if(!Array.isArray(contasContabeis)){
        contasContabeis = [];
    }
    if(contasContabeis.lenght==0){
        contaContabil.id = 1;
    }
    else{
        const maxId = Math.max.apply(Math, contasContabeis.map(function(o) { return o.id; }))
        contaContabil.id=maxId+1;
    }

    contasContabeis.push(contaContabil);
    localStorage.setItem(contasContabeisKey,JSON.stringify(contasContabeis))
}

export const deleteContaContabil = (id)=>{
    const contasContabeis = getContaContabeis();
    const newMoedas = contasContabeis.filter((contaContabil)=>contaContabil.id!==id);
    localStorage.setItem(contasContabeisKey,JSON.stringify(newMoedas))
}

export const getContaContabil = (id)=>{
    let contasContabeis = getContaContabeis();
    return contasContabeis.find((contaContabil)=>contaContabil.id===id);
}


export const saveEdit = (id,contaContabil)=>{
    let contasContabeis = getContaContabeis();

    const moedaIndex = contasContabeis.findIndex((moedaToEdit)=>moedaToEdit.id===id);

    contasContabeis[moedaIndex].nome = contaContabil.nome;
    contasContabeis[moedaIndex].paises = contaContabil.paises;

    localStorage.setItem(contasContabeisKey,JSON.stringify(contasContabeis));

}


export const getContaContabeis = ()=>{

    let contasContabeis = JSON.parse(localStorage.getItem(contasContabeisKey))

    if(typeof contasContabeis === 'undefined' || contasContabeis === null){
        return []
    }

    return contasContabeis
}