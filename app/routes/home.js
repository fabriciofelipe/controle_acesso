module.exports = function(application){
	application.get('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

	application.get('/sair', function(req, res){
		application.app.controllers.home.sair(application, req, res);
	});

	application.get('/cadastrarUsuario', function(req, res){
		application.app.controllers.home.cadastrar(application, req, res);
	});

	application.get('/consultarUsuario', function(req, res){
		application.app.controllers.home.consultar(application, req, res);
	});

	application.get('/alterarUsuario', function(req, res){
		application.app.controllers.home.alterar(application, req, res);
	});
    application.get('/excluirUsuario', function(req, res){
		application.app.controllers.home.excluir(application, req, res);
	});

	
}