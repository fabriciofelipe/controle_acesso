module.exports = function(application){
	// application.get('/cadastro', function(req, res){
	// 	application.app.controllers.cadastro.cadastro(application, req, res);
	// });

	application.post('/alterar', function(req, res){
		application.app.controllers.altera.alterar(application, req, res);
	});
}