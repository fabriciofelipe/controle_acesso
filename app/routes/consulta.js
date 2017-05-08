module.exports = function(application){
	// application.get('/cadastro', function(req, res){
	// 	application.app.controllers.cadastro.cadastro(application, req, res);
	// });

	application.post('/consultar', function(req, res){
		application.app.controllers.consulta.consultar(application, req, res);
	});
}