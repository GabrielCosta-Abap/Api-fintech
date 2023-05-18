const contaNegocio = require('../negocio/conta_negocio')

async function buscarSaldo(req, res) {    
    //Obtem os dados request (e da URI)
    const id = req.params.id;
    try{ 
        //Trata a funcionalidade de negocio
        const saldo = await contaNegocio.buscarSaldo(id);
        //Gera o response adequadamente  
        res.json(saldo);
    }
    catch(err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});
        }
    }
}

async function buscarPorId(req, res) {    
    //Obtem os dados request (e da URI)
    const id = req.params.id;
    try{ 
        //Trata a funcionalidade de negocio
        const conta = await contaNegocio.buscarPorId(id);
        //Gera o response adequadamente  
        res.json(conta);
    }
    catch(err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});
        }
    }
}

async function inserirConta(req, res){
    const conta = req.body;
    try {
        console.log(conta)
        const contaInserida = contaNegocio.inserirConta(conta);
        res.status(201).json(contaInserida)

    } catch (err) {
        if (err) {
            res.status(err.status).json(err)
        }
        else{
            res.status(500).json({message: "Erro não identificado"})
        }
    }
}

module.exports = {
    buscarSaldo,
    buscarPorId,
    inserirConta
}