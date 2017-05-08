module.exports.home = function(application, req, res){

	if(req.session.autorizado){
	 	res.render("home");
	 } else {
		res.send('Usuário precisa fazer login');
	}
}

module.exports.sair = function(application, req, res){

	req.session.destroy( function(err){
		res.render("index", {validacao: {}});
	});
}

module.exports.cadastrar = function(application, req, res){
	
		res.render("cadastro", {validacao: {}});
	
}

module.exports.consultar = function(application, req, res){
	
		res.render("consulta", {result: {}});
	
}

module.exports.alterar = function(application, req, res){
	
		res.render("altera", {result: {}});
	
}

module.exports.excluir = function(application, req, res){
	
		res.render("exclui", {result: {}});
	
}