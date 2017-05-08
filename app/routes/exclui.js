module.exports = function(application){
	// application.get('/cadastro', function(req, res){
	// 	application.app.controllers.cadastro.cadastro(application, req, res);
	// });

	application.post('/excluir', function(req, res){
		application.app.controllers.exclui.excluir(application, req, res);
	});
}